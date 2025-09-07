import { ThemeSkin } from '../components/ThemeSkin'
import { CookieConsent } from '../components/CookieConsent'
import { Pixels } from '../components/Pixels'
import { AnalyticsProvider } from '../src/components/AnalyticsProvider'
import { Header } from '../components/Header'
import { SiteFooter } from '../components/SiteFooter'
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
      </head>
      <body>
        <ThemeSkin>
          <Pixels />
          <AnalyticsProvider>
            <Header />
            <main className="pb-20">
              {children}
            </main>
            <SiteFooter />
          </AnalyticsProvider>
          <CookieConsent />
        </ThemeSkin>
      </body>
    </html>
  )
}