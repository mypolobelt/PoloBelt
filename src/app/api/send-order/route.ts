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

    // Send same detailed email to admin/seller
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'sales@example.com',
      subject: `New Polo Belt Order - ${data.customerName}`,
      html: emailHTML,
      attachments: attachments,
    })

    // Send same detailed email to customer
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: data.email,
      subject: `Order Confirmation - ${data.customerName}`,
      html: emailHTML,
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

  const orderId = generateOrderId()

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #6B2E1F; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
          .order-id { background: #D4A574; color: #6B2E1F; padding: 10px; border-radius: 5px; margin-bottom: 20px; font-weight: bold; text-align: center; }
          .section { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
          .section h3 { color: #6B2E1F; margin-top: 0; border-bottom: 2px solid #D4A574; padding-bottom: 10px; }
          ul { margin: 10px 0; padding-left: 20px; }
          li { margin: 8px 0; }
          .timestamp { color: #999; font-size: 12px; margin-top: 10px; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
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
            <ul>${threadColorsList || '<li>None specified</li>'}</ul>
            <p><strong>Custom Stamp:</strong> ${data.designDetails.hasStamp ? 'Yes - See attached file' : 'No'}</p>
          </div>

          <div class="section">
            <h3>Order Quantities</h3>
            <ul>${orderItemsList || '<li>No items specified</li>'}</ul>
          </div>

          <div class="footer">
            <p>Thank you for your order. We will process this and contact you shortly with pricing and delivery details.</p>
            <p>Order Time: ${new Date(data.timestamp).toISOString()}</p>
          </div>
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