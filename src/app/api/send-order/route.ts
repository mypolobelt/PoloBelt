import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { put } from "@vercel/blob";
import { THREAD_COLORS } from "@/database/constants";
import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";
import { DesignSpecPDFDocument } from "@/components/belt_design/DesignSpecPDF";
import sharp from "sharp";
import path from "path";

interface ThreadColorDetail {
  name: string;
  id: string;
  hex: string;
}

interface OrderData {
  customerName: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    stateRegion: string;
    postcode: string;
    country: string;
  };
  designDetails: {
    designName: string;
    selectedPreset?: string | null;
    threadColors: string[];
    threadColorDetails?: ThreadColorDetail[];
    beltWidth: string;
    leatherColor: string;
    buckleFinish: string;
    hasStamp: boolean;
    stampImage?: string;
    beltImage?: string;
  };
  orderQuantities: Array<{
    size: string;
    width?: string;
    stamped?: "Yes" | "No";
    quantity: number;
  }>;
  timestamp: string;
}

function parseThreadColorDetails(threadColors: string[]): ThreadColorDetail[] {
  return threadColors.map((raw) => {
    const parts = raw.trim().split(" ");
    const id = parts[parts.length - 1];
    const name = parts.slice(0, -1).join(" ");
    const dbEntry = THREAD_COLORS[id as keyof typeof THREAD_COLORS] as
      | { name: string; hex: string }
      | undefined;
    return {
      name: dbEntry?.name || name,
      id,
      hex: dbEntry?.hex || "#888888",
    };
  });
}

const PRESET_DISPLAY_NAMES: Record<string, string> = {
  plk: "The Classic",
  classicstripe: "The Classic Stripe",
  classicdoublestripe: "Classic Double Stripe",
  chain: "The Chain",
  aztec: "The Aztec",
  triplestripe: "Triple Stripe",
  diamondstripe: "Diamond Stripe",
  stripey: "The Stripey One",
  diamonds: "Diamonds",
  altblock: "Alt Block & Stripes",
  Classic_2Stripe: "Classic 2-Stripe",
};

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const baseUrl = `${request.nextUrl.protocol}//${request.nextUrl.host}`;
  try {
    const data: OrderData = await request.json();

    const threadColorDetails =
      data.designDetails.threadColorDetails ||
      parseThreadColorDetails(data.designDetails.threadColors);

    const attachments: Array<{ filename: string; content: string }> = [];
    const blobUrlsToDelete: string[] = [];

    // Upload belt image to Vercel Blob → public URL for email
    let beltImageUrl: string | null = null;
    if (data.designDetails.beltImage) {
      try {
        const beltBase64 = data.designDetails.beltImage.replace(/^data:image\/[^;]+;base64,/, "");
        const buffer = Buffer.from(beltBase64, "base64");
        const blob = await put(`belt-designs/belt-${Date.now()}.jpg`, buffer, {
          access: "public",
          contentType: "image/jpeg",
        });
        beltImageUrl = blob.url;
        blobUrlsToDelete.push(blob.url);
      } catch (err) {
        console.error("Belt image blob upload error:", err);
      }
    }

    // Upload stamp image to Vercel Blob → public URL for email
    let stampImageUrl: string | null = null;
    if (data.designDetails.stampImage) {
      try {
        const stampBase64 = data.designDetails.stampImage.replace(/^data:image\/[^;]+;base64,/, "");
        const buffer = Buffer.from(stampBase64, "base64");
        const blob = await put(`stamps/stamp-${Date.now()}.png`, buffer, {
          access: "public",
          contentType: "image/png",
        });
        stampImageUrl = blob.url;
        blobUrlsToDelete.push(blob.url);
      } catch (err) {
        console.error("Stamp image blob upload error:", err);
      }
    }

    // Convert logo.webp → PNG base64 for @react-pdf/renderer (webp not supported)
    let logoPngDataUri: string | null = null;
    try {
      const logoPath = path.join(process.cwd(), "public", "assets", "logo.webp");
      const pngBuffer = await sharp(logoPath).png().toBuffer();
      logoPngDataUri = `data:image/png;base64,${pngBuffer.toString("base64")}`;
    } catch (err) {
      console.error("Logo conversion error:", err);
    }

    // Generate full design spec PDF and upload to Vercel Blob
    let designPdfUrl: string | null = null;
    try {
      const pdfElement = createElement(DesignSpecPDFDocument, {
        designName: data.designDetails.designName || "Custom Design",
        beltImage: data.designDetails.beltImage || null,
        threadColorDetails,
        leatherColor: data.designDetails.leatherColor,
        buckleFinish: data.designDetails.buckleFinish,
        stampImage: stampImageUrl || data.designDetails.stampImage || null,
        logoUrl: logoPngDataUri || undefined,
      });
      // @ts-expect-error — renderToBuffer expects DocumentProps but our wrapper renders a Document
      const pdfBuffer = await renderToBuffer(pdfElement);
      const pdfBlob = await put(
        `design-specs/${data.designDetails.designName || "design"}-${Date.now()}.pdf`,
        pdfBuffer,
        { access: "public", contentType: "application/pdf" }
      );
      designPdfUrl = pdfBlob.url;
      blobUrlsToDelete.push(pdfBlob.url);
    } catch (err) {
      console.error("PDF generation error:", err);
    }

    const emailHTML = buildOrderEmail(data, threadColorDetails, beltImageUrl, stampImageUrl, baseUrl, designPdfUrl);
    const fromAddress = process.env.RESEND_FROM_ADDRESS || "";
    const adminEmail = process.env.ADMIN_EMAIL || "";

    if (!fromAddress || !adminEmail) {
      console.error("Missing env: RESEND_FROM_ADDRESS or ADMIN_EMAIL");
      return NextResponse.json(
        { success: false, error: "Server email config missing" },
        { status: 500 },
      );
    }

    // Send to admin
    const adminResult = await resend.emails.send({
      from: fromAddress,
      to: adminEmail,
      subject: `New Polo Belt Order - ${data.customerName}`,
      html: emailHTML,
      attachments,
    });

    if (adminResult.error) {
      console.error("Resend admin email error:", adminResult.error);
      return NextResponse.json(
        { success: false, error: `Admin email failed: ${adminResult.error.message}` },
        { status: 500 },
      );
    }

    // Send to customer
    const customerResult = await resend.emails.send({
      from: fromAddress,
      to: data.email,
      subject: `Order Confirmation - Polo Belt`,
      html: emailHTML,
      attachments,
    });

    if (customerResult.error) {
      console.error("Resend customer email error:", customerResult.error);
      // Admin email sent — don't fail the whole request
    }

    return NextResponse.json({
      success: true,
      message: "Order emails sent successfully",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("send-order route error:", msg);
    return NextResponse.json(
      { success: false, error: msg },
      { status: 500 },
    );
  }
}

function buildOrderEmail(data: OrderData, threadColorDetails: ThreadColorDetail[], beltImageUrl: string | null = null, stampImageUrl: string | null = null, baseUrl: string = "", designPdfUrl: string | null = null): string {
  const threadSwatchesHtml = threadColorDetails.length > 0
    ? threadColorDetails.map(tc => `
        <div style="display:flex;align-items:center;margin-bottom:6px;">
          <span style="display:inline-block;width:18px;height:18px;background-color:${tc.hex};border:1px solid #999;border-radius:2px;margin-right:8px;flex-shrink:0;outline:1px solid rgba(0,0,0,0.08);"></span>
          <span style="font-size:13px;color:#333;">- ${tc.name.toLowerCase()} ${tc.id}</span>
        </div>`).join("")
    : "<p style='font-size:13px;color:#888;'>Not specified</p>";

  const orderItemsList = data.orderQuantities
    .map(
      (item) =>
        `<li>${item.size} | ${item.width || "Width not specified"} | Stamped: ${item.stamped || "No"} | Qty: ${item.quantity}</li>`,
    )
    .join("");

  const orderId = generateOrderId();

  const templateName = data.designDetails.selectedPreset
    ? (PRESET_DISPLAY_NAMES[data.designDetails.selectedPreset] ??
      data.designDetails.selectedPreset)
    : "Unknown";

  const downloadUrl = designPdfUrl || beltImageUrl;
  const downloadFilename = designPdfUrl ? "design-spec.pdf" : "belt-design.jpg";

  const beltImageHtml = beltImageUrl
    ? `<img src="${beltImageUrl}" alt="Belt Design" style="width:100%;max-width:560px;display:block;margin:0 auto 0 auto;border-radius:4px;" />`
    : "";

  const downloadBtnHtml = downloadUrl
    ? `<div style="text-align:center;margin:16px 0 4px 0;">
         <a href="${downloadUrl}" download="${downloadFilename}" style="display:inline-block;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;background:#1a1a2e;border:2px solid #c9a84c;padding:12px 32px;border-radius:6px;letter-spacing:1px;">&#11015;&nbsp; Download Design</a>
       </div>`
    : "";

  const stampImageHtml = stampImageUrl
    ? `<img src="${stampImageUrl}" alt="Stamp" style="width:80px;height:80px;object-fit:contain;" />`
    : "<p style='font-size:13px;color:#888;'>None</p>";

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 620px; margin: 0 auto; padding: 20px; }
          .header { background: #6B2E1F; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
          .order-id { background: #D4A574; color: #6B2E1F; padding: 10px; border-radius: 5px; margin-bottom: 20px; font-weight: bold; text-align: center; }
          .section { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
          .section h3 { color: #6B2E1F; margin-top: 0; border-bottom: 2px solid #D4A574; padding-bottom: 10px; }
          ul { margin: 10px 0; padding-left: 20px; }
          li { margin: 8px 0; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
          .spec-row { display: table; width: 100%; border-collapse: collapse; }
          .spec-col { display: table-cell; vertical-align: top; padding-right: 20px; width: 33%; }
          .spec-label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.08em; color: #6B2E1F; margin-bottom: 8px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; text-align: center;">Polo Belt Order</h1>
            <p style="margin: 10px 0 0 0; text-align: center;">Order submitted: ${new Date(data.timestamp).toLocaleString()}</p>
          </div>

          <div class="order-id">
            Order ID: ${orderId}
          </div>

          <!-- DESIGN SPEC SECTION — table layout (Gmail-safe, no flexbox) -->
          <div class="section" style="background:#fafafa;">
            <!-- Header: name LEFT, logo RIGHT -->
            <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
              <tr>
                <td style="vertical-align:middle;">
                  <h2 style="margin:0;font-size:20px;font-weight:bold;color:#1a1a1a;">${escapeHtml(data.designDetails.designName || "Custom Design")}</h2>
                </td>
                <td style="vertical-align:middle;text-align:right;width:60px;">
                  <img src="${baseUrl}/assets/logo.webp" alt="MPB Logo" style="width:52px;height:52px;display:inline-block;" />
                </td>
              </tr>
            </table>

            ${beltImageHtml ? `<div style="margin-bottom:16px;">${beltImageHtml}</div>` : ""}

            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="vertical-align:top;width:33%;padding-right:16px;">
                  <p class="spec-label">Thread colours:</p>
                  ${threadSwatchesHtml}
                </td>
                <td style="vertical-align:top;width:33%;padding-right:16px;">
                  <p class="spec-label">Leather colour:</p>
                  <p style="font-size:13px;color:#333;margin:0 0 12px 0;">${escapeHtml(data.designDetails.leatherColor)}</p>
                  <p class="spec-label">Buckle colour:</p>
                  <p style="font-size:13px;color:#333;margin:0;">${escapeHtml(data.designDetails.buckleFinish)}</p>
                </td>
                <td style="vertical-align:top;width:33%;">
                  <p class="spec-label">Stamp:</p>
                  ${stampImageHtml}
                </td>
              </tr>
            </table>

            ${downloadBtnHtml}
          </div>

          <div class="section">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> ${escapeHtml(data.customerName)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          </div>

          <div class="section">
            <h3>Shipping Address</h3>
            <p>
              ${escapeHtml(data.address.line1)}<br/>
              ${data.address.line2 ? escapeHtml(data.address.line2) + "<br/>" : ""}
              ${escapeHtml(data.address.city)}, ${escapeHtml(data.address.stateRegion)}<br/>
              ${escapeHtml(data.address.postcode)}<br/>
              ${escapeHtml(data.address.country)}
            </p>
          </div>

          <div class="section">
            <h3>Belt Design Details</h3>
            <p><strong>Design Template:</strong> ${escapeHtml(templateName)}</p>
            <p><strong>Design Name:</strong> ${escapeHtml(data.designDetails.designName)}</p>
            <p><strong>Belt Width:</strong> ${escapeHtml(data.designDetails.beltWidth)}</p>
            <p><strong>Leather Color:</strong> ${escapeHtml(data.designDetails.leatherColor)}</p>
            <p><strong>Buckle Finish:</strong> ${escapeHtml(data.designDetails.buckleFinish)}</p>
            <p><strong>Thread Colors:</strong></p>
            <ul>${threadColorDetails.map(tc => `<li>${tc.name} ${tc.id}</li>`).join("") || "<li>None specified</li>"}</ul>
            <p><strong>Custom Stamp:</strong> ${data.designDetails.hasStamp ? "Yes - See attached file" : "No"}</p>
          </div>

          <div class="section">
            <h3>Order Quantities</h3>
            <ul>${orderItemsList || "<li>No items specified</li>"}</ul>
          </div>

          <div class="footer">
            <p>Thank you for your order. We will process this and contact you shortly with pricing and delivery details.</p>
            <p>Order Time: ${new Date(data.timestamp).toISOString()}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}
