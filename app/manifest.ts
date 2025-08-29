import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HOTMESS London',
    short_name: 'HOTMESS',
    description: 'Queer fashion, radio, and aftercare. Always too much, never enough.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#FF5300',
    categories: ['lifestyle', 'music', 'fashion'],
    lang: 'en',
    dir: 'ltr',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
    ],
    shortcuts: [
      {
        name: 'Listen Live',
        short_name: 'Radio',
        description: 'Tune into HOTMESS Radio',
        url: '/radio',
        icons: [
          {
            src: '/icon-radio.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Latest Drops',
        short_name: 'Drops',
        description: 'View latest fashion drops',
        url: '/drop',
        icons: [
          {
            src: '/icon-drop.png',
            sizes: '96x96',
            type: 'image/png'
          }
        ]
      }
    ]
  }
}