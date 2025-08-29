import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hotmess.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/radio',
        '/drop',
        '/product/*',
        '/care',
        '/affiliate',
        '/legal/*',
        '/bot-paused'
      ],
      disallow: [
        '/api/*',
        '/admin/*',
        '/_next/*',
        '/rooms',  // Private community areas
        '/label',  // Private label pages
        '/lookbook',  // Maybe private
        '/shop',   // Legacy shop redirect
        '/t/*'     // Short link redirects
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}