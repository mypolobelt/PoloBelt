# Email Setup Guide - Gmail Integration

This guide explains how to set up Gmail SMTP for sending order emails automatically.

## Step 1: Enable 2-Factor Authentication (Required)

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled

## Step 2: Generate App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Select:
   - **App**: Mail
   - **Device**: Windows Computer (or your platform)
3. Google will generate a 16-character password
4. Copy this password (you'll need it next)

## Step 3: Set Environment Variables

Create a `.env.local` file in the root of your project:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
ADMIN_EMAIL=sales@example.com
```

Replace:

- `your-email@gmail.com` with your Gmail address
- `your-16-character-app-password` with the password from Step 2 (no spaces)
- `sales@example.com` with where orders should be sent

## Step 4: Restart Development Server

```bash
npm run dev
```

## Testing

1. Open the Belt Maker app
2. Fill in design details and customer information
3. Click "Request Invoice"
4. Check:
   - Admin email for the full order details
   - Customer email for the confirmation

## Troubleshooting

### "Error: Invalid credentials"

- Verify GMAIL_APP_PASSWORD is correct (remove spaces)
- Check GMAIL_USER is a valid Gmail address
- Ensure 2FA is enabled on the Gmail account

### "Email not sending"

- Check `.env.local` is in the root directory
- Restart the dev server after creating `.env.local`
- Check browser console for error messages

### Less Secure App Access

If using a non-Gmail address or corporate email:

1. You may need to enable "Less secure app access"
2. Or use an "App Password" from your email provider's settings

## Security Notes

- Never commit `.env.local` to Git (it's in `.gitignore`)
- Use App Passwords instead of your actual Gmail password
- Consider using environment variables in production (e.g., Vercel, Render)

## For Production Deployment

When deploying to production:

1. **Vercel**: Add environment variables in Project Settings → Environment Variables
2. **Other Hosts**: Follow their documentation for adding secrets
3. **Consider alternatives**: For high volume, use services like SendGrid or AWS SES

## Email Templates

Emails are sent in two formats:

- **Admin Email**: Detailed order with all design specifications
- **Customer Email**: Confirmation with design summary

You can customize HTML templates in `/src/app/api/send-order/route.ts`
