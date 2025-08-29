import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HOTMESS London',
    short_name: 'HOTMESS',
    description: 'Always Too Much, Never Enough. Queer fashion, radio, and aftercare. London.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#FF5300',
    icons: [
      {
        src: '/og.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
    shortcuts: [
      {
        name: 'Listen Live',
        short_name: 'Radio',
        description: 'HOTMESS Radio — Live 24/7',
        url: '/radio',
        icons: [{ src: '/radio-banner.svg', sizes: '192x192' }],
      },
      {
        name: 'Shop',
        short_name: 'Shop',
        description: 'Latest collections and drops',
        url: '/shop',
        icons: [{ src: '/og.svg', sizes: '192x192' }],
      },
      {
        name: 'Latest Drops',
        short_name: 'Drops',
        description: 'Limited capsule collections',
        url: '/drop',
        icons: [{ src: '/og.svg', sizes: '192x192' }],
      },
    ],
  }
}