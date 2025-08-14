# HOTMESS LDN

Always too much, never enough.

A Next.js application for HOTMESS LDN featuring products, radio, and brand experience.

## Migration from Vite to Next.js

This project has been migrated from Vite + React SPA to Next.js for better performance, SEO, and Vercel deployment.

### Changes Made

- **Removed**: `vite.config.js`, `index.html`, Vite dependencies
- **Added**: Next.js configuration and dependencies
- **Restructured**: Files moved to `src/` directory following Next.js conventions
- **Updated**: Environment variables from `VITE_*` to `NEXT_PUBLIC_*`

### Environment Variables

Copy `.env.example` to `.env.local` and set your values:

```bash
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-shop.myshopify.com
NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token
NEXT_PUBLIC_SHOPIFY_API_VERSION=2024-07
NEXT_PUBLIC_RADIO_STREAM=https://your-radio-stream-url.com
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is ready for Vercel deployment. Simply:

1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

## Pages

- `/` - Homepage with hero, radio, and product grid
- `/about` - About page
- `/contact` - Contact information
- `/api/hello` - Example API route

## Project Structure

```
src/
├── components/          # React components
│   ├── NavBar.jsx
│   ├── ProductGrid.jsx
│   ├── RadioPlayer.jsx
│   └── Footer.jsx
├── lib/                 # Utility functions
│   ├── shopify.js       # Shopify API integration
│   └── brand.js         # Brand configuration
├── pages/               # Next.js pages
│   ├── _app.js          # App wrapper with global styles
│   ├── index.js         # Homepage
│   ├── about.js         # About page
│   ├── contact.js       # Contact page
│   └── api/
│       └── hello.js     # API route
└── styles.css           # Global styles
```

## License

© 2025 HOTMESS. All rights served filthy.