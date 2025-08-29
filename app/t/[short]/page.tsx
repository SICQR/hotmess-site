import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation'

// This would typically use a database
// For now, we'll use the same store as the UTM append endpoint
const shortUrlStore = new Map<string, { target: string; affiliateId: string; created: number }>()

// Shared store with UTM append - in production this would be a database
if (typeof global !== 'undefined') {
  (global as any).shortUrlStore = (global as any).shortUrlStore || shortUrlStore
}

interface PageProps {
  params: Promise<{ short: string }>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ShortUrlPage({ params }: PageProps) {
  const { short } = await params
  
  // Look up the short code
  const urlData = (global as any).shortUrlStore?.get(short)
  
  if (!urlData) {
    notFound()
  }
  
  // Track the click
  trackClick(short, urlData.affiliateId, urlData.target)
  
  // Redirect to target with UTMs preserved
  redirect(urlData.target)
}

async function trackClick(shortCode: string, affiliateId: string, target: string) {
  const trackingData = {
    event: 'short_url_click',
    shortCode,
    affiliateId,
    target,
    timestamp: Date.now()
  }
  
  // Send to Make.com webhook
  const webhookUrl = process.env.MAKE_WEBHOOK_URL
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'short_url_click',
        data: trackingData
      })
    }).catch(console.error)
  }
}