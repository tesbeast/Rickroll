# Rickroll Tracker

A small Vercel project. Opening `/r` sends an email notification and redirects the visitor to the Rick Astley video.

## What it tracks

It records only the fact that the tracking URL was opened and the time the notification was created. It does **not** intentionally collect visitor names, IP addresses, or precise locations.

A link opening is not proof that someone watched the video. Link-preview bots and repeated scans may also trigger notifications.

## Setup

### 1. Create an email-sending account

Create an account at https://resend.com and verify a sender domain/address as required by Resend. Create an API key. Keep the API key private; never put it in frontend code or share it.

### 2. Deploy this project to Vercel

1. Create a GitHub repository and upload these project files.
2. Import that repository at https://vercel.com.
3. In the Vercel project settings, add these Environment Variables:

   - `RESEND_API_KEY` — your Resend API key
   - `NOTIFY_EMAIL` — the email address that should receive scan alerts
   - `FROM_EMAIL` — a sender address verified with Resend, e.g. `Rickroll Tracker <alerts@your-verified-domain.com>`

4. Redeploy after adding the variables.

Your tracking URL will be:

`https://YOUR-PROJECT.vercel.app/r`

### 3. Generate the QR code

On a computer with Node.js installed, open the project folder and run:

```bash
npm install
TRACKER_URL=https://YOUR-PROJECT.vercel.app/r npm run make-qr
```

This creates `rickroll-qr.png`. Replace the example URL with your actual Vercel project URL.

## Test it

Open `https://YOUR-PROJECT.vercel.app/r` yourself. It should redirect to the video and send a notification email. Check your spam folder if the first email does not arrive.

## Important

- Do not publish your Resend API key.
- Each GET request to `/r` can send an email, including repeated scans or automated link previews.
- This starter does not include bot filtering, rate limiting, or a scan dashboard.
- The QR code is only permanent as long as the deployed project and URL remain active.
