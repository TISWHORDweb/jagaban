# Jagaban Rangers Solidarity Movement

React (Vite) website for the Jagaban Rangers Solidarity Movement. All action buttons route to the **Contact** page. WhatsApp float button links to the configured number for quick contact.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve `dist/` with any static host (e.g. Nginx, Netlify, Vercel, GitHub Pages).

## Deployment

- **Static hosting:** Run `npm run build`, then upload the contents of `dist/` to your host. Ensure the server is configured for client-side routing (SPA): all routes should serve `index.html`.
- **Subpath (e.g. /jagaban):** In `vite.config.js` set `base: '/jagaban/'` and rebuild. Update your host to serve from that path.
- **WhatsApp link:** Set your number in `src/components/WhatsAppFloat.jsx` (`WHATSAPP_LINK`).

## Assets

Static assets (images, videos, PDFs) live in **`public/asset/`**. Paths in code use `/asset/...` (e.g. `/asset/logo.png`). Add or replace files in `public/asset/` as needed.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About Us |
| `/mission` | Our Mission |
| `/programs` | Programs & Outreaches |
| `/partnerships` | Partnerships |
| `/contact` | Contact Us |
| `/get-involved` | Redirects to `/contact` |

## Brand colors

- Blue: `#0075B0`
- Light blue: `#00A5ED`
- Red: `#E53935`
- Green: `#00A65A`
