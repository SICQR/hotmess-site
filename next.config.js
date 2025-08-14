/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: '**' }
    ]
  },
  env: {
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN || process.env.VITE_SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_TOKEN: process.env.SHOPIFY_STOREFRONT_TOKEN || process.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
    SHOPIFY_API_VERSION: process.env.SHOPIFY_API_VERSION || process.env.VITE_SHOPIFY_API_VERSION || "2024-07",
    VITE_RADIO_STREAM_URL: process.env.VITE_RADIO_STREAM_URL || process.env.VITE_RADIO_STREAM,
    KLAVIYO_API_KEY: process.env.KLAVIYO_API_KEY || "",
    KLAVIYO_LIST_ID: process.env.KLAVIYO_LIST_ID || "",
    MAKE_WEBHOOK_URL: process.env.MAKE_WEBHOOK_URL || "",
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID || "",
    META_PIXEL_ID: process.env.META_PIXEL_ID || "",
    TIKTOK_PIXEL_ID: process.env.TIKTOK_PIXEL_ID || "",
    RADIOKING_STATUS_URL: process.env.RADIOKING_STATUS_URL || ""
  }
}
module.exports = nextConfig
