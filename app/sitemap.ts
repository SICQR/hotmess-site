import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hotmess.vercel.app'
  
  // Static pages
  const staticPages = [
    '',
    '/radio',
    '/shop',
    '/drop',
    '/lookbook',
    '/hand-in-hand',
    '/rooms',
    '/affiliate',
    '/label',
    '/legal/terms',
    '/legal/privacy',
    '/legal/cookies',
    '/legal/age',
  ]

  // Product pages
  const products = [
    'superhung-vest-black',
    'raw-harness-black', 
    'high-varsity-navy',
    'test'
  ]

  const sitemap: MetadataRoute.Sitemap = [
    // Static pages
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
    // Product pages
    ...products.map((slug) => ({
      url: `${baseUrl}/product/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.6,
    })),
  ]

  return sitemap
}