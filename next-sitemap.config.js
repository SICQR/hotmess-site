import { NextConfig } from 'next'

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://hotmess-ldn.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*', '/t/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/t/']
      }
    ]
  }
}

export default config