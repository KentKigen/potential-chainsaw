# Homebase Real Estate Website

A production-grade, highly functional real estate website built using React, Vite, Tailwind CSS, mapping libraries, Node.js forms, and extensive testing tools.

## Tech Stack
- Frontend: React Router, Tailwind CSS, Framer Motion
- Backend: Express (Forms & Email sending API)
- Maps: Mapbox integrations
- Testing: Jest, Playwright

## Prerequisites
- Node.js 18.x or 20.x (Check `.nvmrc`)
- API keys (Mapbox, reCAPTCHA, SMTP)

## Setup & Run

1. **Install Dependencies:**
   ```bash
   npm ci
   ```

2. **Configure Environment:**
   Copy `.env.example` to `.env` and fill out your keys:
   ```bash
   cp .env.example .env
   ```

3. **Run the Development Environment:**
   You need two terminals for local development because of the backend API server.
   
   Terminal 1 (Backend):
   ```bash
   npm run start:server
   ```
   
   Terminal 2 (Frontend React/Vite):
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

5. **Preview Production Build locally:**
   ```bash
   npm run preview
   ```

## Testing

1. **Unit Tests (Jest):**
   ```bash
   npm run test
   ```

2. **E2E Booking Flow (Playwright):**
   ```bash
   npx playwright install
   npm run test:e2e
   ```

## Swapping Placeholder Keys

1. **Mapbox**: Replace `VITE_MAPBOX_KEY=REPLACE_ME` with your access token in `.env`. The Mapbox GL JS map integration uses this environment variable natively to authenticate the components in the application.
2. **SMTP (Email Delivery)**: The server will read `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` securely from your environment variables without requiring you to compile or ship them in the frontend code.
3. **ReCaptcha**: The `RECAPTCHA_SITE_KEY` is loaded by the `<GoogleReCaptchaProvider>` tag to prevent spam in your public endpoints.

## Troubleshooting

- **Dependency and Node mismatch**: Ensure Node version matches `.nvmrc`; run `node -v` and `npm ci` to install exact dependencies.
- **Missing environment variables**: If the server crashes on start, check `.env` is present and keys are set. Use `.env.example` as a template.
- **Port conflicts**: If `vite` or the express server fails with EADDRINUSE, change the PORT in `.env` or kill the current process hanging.
- **Map or API key errors**: Ensure your domains are fully whitelisted within Mapbox/SMTP control panels.
- **Build errors from TypeScript**: The system is designed to use strict bounds in `tsconfig.json`, run `npx tsc --noEmit` if any errors block CI pipelines.

## Features Documentation

### WhatsApp Button Integration
The `WhatsAppButton` component accepts multiple robust phone number formats (e.g. `+254712345678`, `0712345678`, `712345678`) and dynamically normalizes them to the WhatsApp `254` standard. 
If no phone is provided, it elegantly falls back to opening the standard lead form.

**Analytics Hook Example:**
```js
// Native inside the button handles
window.dataLayer.push({
  event: 'contact_whatsapp_click',
  agent: agentName,
  listingId: listingId
});
```

### Global Currency Toggle (KES/USD)
The web app utilizes `CurrencyContext` bounding the entire tree to handle dynamic pricing swaps without layout shifts. The `server.js` maintains an hourly cache (`CACHE_DURATION = 60 * 60 * 1000`) hitting your `EXCHANGE_RATE_API_KEY` to prevent rate-limiting from public API providers.

To change the cache interval natively, modify `let CACHE_DURATION = 3600000` via `server.js`.

### Property Type Selection
Easily categorize real estate as `land` vs `property` natively. Data flows down from `/data/listings.json`. 
Run a regeneration script mapping arrays containing `type: "land"` or `"property"` to trigger custom UI adjustments (like hiding bed/bath UI elements automatically).
Analytics fires native events during updates.