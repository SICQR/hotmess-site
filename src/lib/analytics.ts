// Analytics event tracking system as specified in the business requirements
import { UTM } from '../types/utm'

// Event names exactly as specified in the problem statement
export type EventName = 
  | 'page_view'
  | 'radio_play' 
  | 'radio_pause'
  | 'radio_now_playing'
  | 'product_view'
  | 'add_to_cart_click'
  | 'checkout_click'
  | 'qr_landing'
  | 'affiliate_apply_click'

export interface BaseEvent {
  name: EventName
  timestamp: number
  sessionId: string
}

export interface PageViewEvent extends BaseEvent {
  name: 'page_view'
  path: string
  utm?: UTM
}

export interface RadioPlayEvent extends BaseEvent {
  name: 'radio_play'
  source: 'player_bar' | 'page'
  showId?: string
}

export interface RadioPauseEvent extends BaseEvent {
  name: 'radio_pause'
  source: 'player_bar' | 'page'
}

export interface RadioNowPlayingEvent extends BaseEvent {
  name: 'radio_now_playing'
  title: string
  artist?: string
}

export interface ProductViewEvent extends BaseEvent {
  name: 'product_view'
  id: string
  badge: string
}

export interface AddToCartClickEvent extends BaseEvent {
  name: 'add_to_cart_click'
  id: string
}

export interface CheckoutClickEvent extends BaseEvent {
  name: 'checkout_click'
  id: string
  utm?: UTM
}

export interface QRLandingEvent extends BaseEvent {
  name: 'qr_landing'
  campaign: string
  utm?: UTM
}

export interface AffiliateApplyClickEvent extends BaseEvent {
  name: 'affiliate_apply_click'
  source: string
}

export type AnalyticsEvent = 
  | PageViewEvent
  | RadioPlayEvent
  | RadioPauseEvent
  | RadioNowPlayingEvent
  | ProductViewEvent
  | AddToCartClickEvent
  | CheckoutClickEvent
  | QRLandingEvent
  | AffiliateApplyClickEvent

// Throttling to prevent duplicate events
const eventThrottle = new Map<string, number>()
const THROTTLE_WINDOW = 1000 // 1 second

function getSessionId(): string {
  if (typeof window === 'undefined') return 'server'
  
  let sessionId = sessionStorage.getItem('hotmess_session')
  if (!sessionId) {
    sessionId = `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    sessionStorage.setItem('hotmess_session', sessionId)
  }
  return sessionId
}

function shouldThrottle(eventKey: string): boolean {
  const now = Date.now()
  const lastFired = eventThrottle.get(eventKey)
  
  if (lastFired && (now - lastFired) < THROTTLE_WINDOW) {
    return true
  }
  
  eventThrottle.set(eventKey, now)
  return false
}

function logEventInDev(event: AnalyticsEvent) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event)
  }
}

export function trackEvent(event: Omit<AnalyticsEvent, 'timestamp' | 'sessionId'>) {
  if (typeof window === 'undefined') return

  const fullEvent: AnalyticsEvent = {
    ...event,
    timestamp: Date.now(),
    sessionId: getSessionId()
  } as AnalyticsEvent

  // Throttle duplicate events
  const eventKey = `${event.name}:${JSON.stringify(event)}`
  if (shouldThrottle(eventKey)) {
    return
  }

  // Log in development
  logEventInDev(fullEvent)

  // Send to Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const gtag = (window as any).gtag
    
    // Map to GA4 events
    switch (fullEvent.name) {
      case 'page_view':
        gtag('event', 'page_view', {
          page_location: window.location.href,
          page_title: document.title,
          custom_parameters: fullEvent.utm
        })
        break
      case 'radio_play':
        gtag('event', 'audio_play', {
          content_type: 'radio',
          content_id: fullEvent.showId,
          source: fullEvent.source
        })
        break
      case 'product_view':
        gtag('event', 'view_item', {
          currency: 'GBP',
          item_id: fullEvent.id,
          item_category: fullEvent.badge
        })
        break
      case 'add_to_cart_click':
        gtag('event', 'add_to_cart', {
          currency: 'GBP',
          item_id: fullEvent.id
        })
        break
      case 'checkout_click':
        gtag('event', 'begin_checkout', {
          currency: 'GBP',
          item_id: fullEvent.id
        })
        break
      default:
        gtag('event', fullEvent.name, {
          custom_parameters: fullEvent
        })
    }
  }

  // Send to Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const fbq = (window as any).fbq
    
    switch (fullEvent.name) {
      case 'product_view':
        fbq('track', 'ViewContent', {
          content_ids: [fullEvent.id],
          content_type: 'product'
        })
        break
      case 'add_to_cart_click':
        fbq('track', 'AddToCart', {
          content_ids: [fullEvent.id]
        })
        break
      case 'checkout_click':
        fbq('track', 'InitiateCheckout', {
          content_ids: [fullEvent.id]
        })
        break
    }
  }

  // Send to our internal analytics API
  fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fullEvent)
  }).catch(error => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to send analytics event:', error)
    }
  })
}

// Convenience functions for common events
export const analytics = {
  pageView: (path: string, utm?: UTM) => {
    trackEvent({ name: 'page_view', path, utm } as PageViewEvent)
  },
  
  radioPlay: (source: 'player_bar' | 'page', showId?: string) => {
    trackEvent({ name: 'radio_play', source, showId } as RadioPlayEvent)
  },
  
  radioPause: (source: 'player_bar' | 'page') => {
    trackEvent({ name: 'radio_pause', source } as RadioPauseEvent)
  },
  
  radioNowPlaying: (title: string, artist?: string) => {
    trackEvent({ name: 'radio_now_playing', title, artist } as RadioNowPlayingEvent)
  },
  
  productView: (id: string, badge: string) => {
    trackEvent({ name: 'product_view', id, badge } as ProductViewEvent)
  },
  
  addToCartClick: (id: string) => {
    trackEvent({ name: 'add_to_cart_click', id } as AddToCartClickEvent)
  },
  
  checkoutClick: (id: string, utm?: UTM) => {
    trackEvent({ name: 'checkout_click', id, utm } as CheckoutClickEvent)
  },
  
  qrLanding: (campaign: string, utm?: UTM) => {
    trackEvent({ name: 'qr_landing', campaign, utm } as QRLandingEvent)
  },
  
  affiliateApplyClick: (source: string) => {
    trackEvent({ name: 'affiliate_apply_click', source } as AffiliateApplyClickEvent)
  }
}