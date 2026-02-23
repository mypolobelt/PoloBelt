import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface OrderData {
  customerName: string
  email: string
  address: {
    line1: string
    line2: string
    city: string
    stateRegion: string
    postcode: string
    country: string
  }
  designDetails: {
    designName: string
    threadColors: string[]
    beltWidth: string
    leatherColor: string
    buckleFinish: string
    hasStamp: boolean
    stampImage?: string
  }
  orderQuantities: Array<{
    size: string
    quantity: number
  }>
  timestamp: string
}

export async function POST(request: NextRequest) {
  try {
    const data: OrderData = await request.json()

    // Configure your Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Prepare stamp attachment if it exists
    const attachments: Array<{
      filename: string
      content: Buffer
      contentDisposition: 'attachment' | 'inline'
    }> = []

    if (data.designDetails.stampImage) {
      try {
        // Convert base64 data URL to buffer
        const base64Data = data.designDetails.stampImage.replace(
          /^data:image\/[^;]+;base64,/,
          ''
        )
        const stampBuffer = Buffer.from(base64Data, 'base64')
        const stampFilename = `polo-belt-stamp-${Date.now()}.png`

        attachments.push({
          filename: stampFilename,
          content: stampBuffer,
          contentDisposition: 'attachment',
        })
      } catch (error) {
        console.error('Error processing stamp image:', error)
      }
    }

    // Build email HTML
    const emailHTML = buildOrderEmail(data)

    // Send to admin
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'sales@example.com',
      subject: `New Polo Belt Order - ${data.customerName}`,
      html: emailHTML,
      attachments: attachments,
    })

    // Send confirmation to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: 'Order Confirmation - Polo Belt Designer',
      html: buildCustomerConfirmationEmail(data),
      attachments: attachments,
    })

    return NextResponse.json({
      success: true,
      message: 'Order emails sent successfully',
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send order' },
      { status: 500 }
    )
  }
}

function buildOrderEmail(data: OrderData): string {
  const threadColorsList = data.designDetails.threadColors
    .map((color, idx) => `<li>Thread Color ${idx + 1}: ${color}</li>`)
    .join('')

  const orderItemsList = data.orderQuantities
    .map((item) => `<li>${item.size}: ${item.quantity} belt(s)</li>`)
    .join('')

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #6B2E1F; color: white; padding: 20px; border-radius: 5px; }
          .section { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
          .section h3 { color: #6B2E1F; margin-top: 0; }
          ul { margin: 10px 0; padding-left: 20px; }
          li { margin: 8px 0; }
          .timestamp { color: #999; font-size: 12px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Polo Belt Order</h1>
            <p>Order submitted at: ${new Date(data.timestamp).toLocaleString()}</p>
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
              ${data.address.line2 ? escapeHtml(data.address.line2) + '<br/>' : ''}
              ${escapeHtml(data.address.city)}, ${escapeHtml(data.address.stateRegion)}<br/>
              ${escapeHtml(data.address.postcode)}<br/>
              ${escapeHtml(data.address.country)}
            </p>
          </div>

          <div class="section">
            <h3>Belt Design Details</h3>
            <p><strong>Design Name:</strong> ${escapeHtml(data.designDetails.designName)}</p>
            <p><strong>Belt Width:</strong> ${escapeHtml(data.designDetails.beltWidth)}</p>
            <p><strong>Leather Color:</strong> ${escapeHtml(data.designDetails.leatherColor)}</p>
            <p><strong>Buckle Finish:</strong> ${escapeHtml(data.designDetails.buckleFinish)}</p>
            <p><strong>Thread Colors:</strong></p>
            <ul>${threadColorsList}</ul>
            <p><strong>Custom Stamp:</strong> ${data.designDetails.hasStamp ? 'Yes - See attached file' : 'No'}</p>
          </div>

          <div class="section">
            <h3>Order Quantities</h3>
            <ul>${orderItemsList}</ul>
          </div>

          <p class="timestamp">
            Order ID: ${generateOrderId()}<br/>
            Created: ${new Date(data.timestamp).toISOString()}
          </p>
        </div>
      </body>
    </html>
  `
}

function buildCustomerConfirmationEmail(data: OrderData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #D4A574; color: #6B2E1F; padding: 20px; border-radius: 5px; }
          .section { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Your Order</h1>
            <p>Dear ${escapeHtml(data.customerName)},</p>
          </div>

          <p>We have received your polo belt order. Our team will review your design and contact you within 24 hours with a detailed quote.</p>

          <div class="section">
            <h3>Your Design: ${escapeHtml(data.designDetails.designName)}</h3>
            <p>We'll be crafting your belt with:</p>
            <ul>
              <li>Width: ${escapeHtml(data.designDetails.beltWidth)}</li>
              <li>Leather: ${escapeHtml(data.designDetails.leatherColor)}</li>
              <li>Buckle: ${escapeHtml(data.designDetails.buckleFinish)}</li>
            </ul>
            ${data.designDetails.hasStamp ? `<div style="margin-top: 15px; padding: 10px; background: #f5f5f5; border-radius: 5px;"><strong>Your Custom Stamp:</strong><br/><p style="font-size: 12px; color: #666; margin-top: 8px;">Check the attachment in this email to download your stamp design.</p></div>` : ''}
          </div>

          <p>If you have any questions, feel free to reach out to us.</p>

          <p>Best regards,<br/><strong>Polo Belt Team</strong></p>
        </div>
      </body>
    </html>
  `
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

function generateOrderId(): string {
  return `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
}
