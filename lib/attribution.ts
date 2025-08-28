// Attribution tracking for HOTMESS affiliate system
import { getCookie, setCookie } from './cookies'

const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'ref', 'qr']

export interface Attribution {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  ref?: string
  qr?: string
  ts?: number
  attribution_mode?: 'first_touch' | 'last_touch' | 'time_decay'
}

export function captureAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null
  
  const url = new URL(window.location.href)
  const attrs: Attribution = {}
  
  // Capture UTM parameters and other attribution data
  ATTR_KEYS.forEach(key => {
    const value = url.searchParams.get(key)
    if (value) {
      (attrs as any)[key] = value
    }
  })
  
  // Only proceed if we have attribution data
  if (Object.keys(attrs).length === 0) return null
  
  // Get existing attribution
  const existing = getAttribution()
  
  // Apply attribution logic based on mode
  const mode = attrs.attribution_mode || 'last_touch'
  let saved: Attribution
  
  switch (mode) {
    case 'first_touch':
      // Keep first attribution, only update if no existing attribution
      saved = existing.ts ? existing : { ...attrs, ts: Date.now() }
      break
    case 'time_decay':
      // Favor recent attribution but keep historical data
      saved = { ...existing, ...attrs, ts: Date.now() }
      break
    case 'last_touch':
    default:
      // Always use latest attribution
      saved = { ...attrs, ts: Date.now() }
      break
  }
  
  // Store attribution
  localStorage.setItem('hm_attrib', JSON.stringify(saved))
  setCookie('hm_attrib', JSON.stringify(saved), { expires: 30, sameSite: 'Lax' })
  
  return saved
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {}
  
  try {
    const localData = localStorage.getItem('hm_attrib')
    const cookieData = getCookie('hm_attrib')
    const data = localData || cookieData || '{}'
    return JSON.parse(data)
  } catch (error) {
    console.warn('Failed to parse attribution data:', error)
    return {}
  }
}

export function clearAttribution(): void {
  if (typeof window === 'undefined') return
  
  localStorage.removeItem('hm_attrib')
  setCookie('hm_attrib', '', { expires: -1 })
}

export function trackConversion(value?: number, currency = 'GBP'): void {
  const attribution = getAttribution()
  
  if (!attribution.ts) return // No attribution to track
  
  // Send conversion data to analytics
  const conversionData = {
    ...attribution,
    event: 'conversion',
    value,
    currency,
    timestamp: Date.now()
  }
  
  // Track with Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', 'purchase', {
      value,
      currency,
      custom_parameters: attribution
    })
  }
  
  // Track with Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    ;(window as any).fbq('track', 'Purchase', {
      value,
      currency,
      custom_data: attribution
    })
  }
  
  // Send to Make.com webhook for affiliate tracking
  const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL
  if (webhookUrl) {
    fetch('/api/track/conversion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(conversionData)
    }).catch(error => console.warn('Failed to track conversion:', error))
  }
}