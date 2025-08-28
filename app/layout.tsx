import { ThemeSkin } from '../components/ThemeSkin'
import { CookieConsent } from '../components/CookieConsent'
import { Pixels } from '../components/Pixels'
import { AnalyticsProvider } from '../src/components/AnalyticsProvider'
import './globals.css'

export const metadata = {
  title: 'HOTMESS London — Always Too Much, Never Enough',
  description: 'Queer fashion, radio, and aftercare. HOTMESS London.',
  openGraph: {
    title: 'HOTMESS London',
    description: 'Queer fashion, radio, and aftercare.',
    images: [{ url: '/og.svg' }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Oswald:wght@200..700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <ThemeSkin>
          <Pixels />
          <AnalyticsProvider>
            {children}
          </AnalyticsProvider>
          <CookieConsent />
        </ThemeSkin>
      </body>
    </html>
  )
}