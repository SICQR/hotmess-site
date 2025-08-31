import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/t/'],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hotmess-ldn.vercel.app'}/sitemap.xml`,
  }
}