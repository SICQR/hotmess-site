'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { analytics } from '../lib/analytics'
import { getUtmFromUrl } from '../lib/utm'

export function usePageTracking() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page view
    const utm = getUtmFromUrl()
    analytics.pageView(pathname, utm)
    
    // Handle QR landing pages
    const qrParam = searchParams.get('qr')
    const campaignParam = searchParams.get('utm_campaign')
    
    if (qrParam && campaignParam) {
      analytics.qrLanding(campaignParam, utm)
    }
  }, [pathname, searchParams])
}