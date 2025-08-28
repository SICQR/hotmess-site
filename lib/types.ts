// TypeScript types for HOTMESS data models

export interface DJ {
  id: string
  name: string
  bio: string
  imageUrl?: string
  socialLinks?: {
    instagram?: string
    twitter?: string
    soundcloud?: string
    mixcloud?: string
  }
  residencies?: string[]
  genres?: string[]
  location?: string
}

export interface Show {
  id: string
  title: string
  format: 'residency' | 'provocateur' | 'mix'
  djId?: string
  description: string
  schedule?: {
    dayOfWeek: number // 0-6, Sunday = 0
    startTime: string // HH:MM format
    endTime: string
    timezone: string
  }
  idents?: string[] // Audio file references
  talkBeds?: string[] // Background music for talk segments
  sponsors?: string[]
  imageUrl?: string
}

export interface Product {
  id: string
  title: string
  collection: 'RAW' | 'HUNG' | 'HIGH' | 'SUPERHUNG' | 'SUPERHIGH' | 'HNH_MESS'
  price: number
  currency: string
  images: string[]
  description: string
  sizes?: string[]
  colors?: string[]
  materials?: string[]
  crossSells?: string[] // Other product IDs
  qrRoute?: string // Which page to link QR codes to
  dropId?: string // If part of a limited drop
  tags?: string[]
}

export interface AffiliateTier {
  id: string
  name: string
  commissionRate: number // Percentage
  requirements: {
    salesVolume?: number
    scansCount?: number
    timeframe?: number // Days
  }
  benefits: string[]
}

export interface AffiliateUser {
  id: string
  email: string
  tier: string
  status: 'active' | 'pending' | 'suspended'
  totalEarnings: number
  currentBalance: number
  qrCodes: QRCode[]
  performance: {
    totalScans: number
    totalSessions: number
    totalConversions: number
    conversionRate: number
    averageOrderValue: number
  }
  payoutInfo?: {
    method: 'bank_transfer' | 'paypal'
    details: any
  }
}

export interface QRCode {
  id: string
  shortCode: string
  affiliateId: string
  target: string
  campaign?: string
  medium?: string
  created: string
  scans: number
  lastScanned?: string
}

export interface Partner {
  id: string
  name: string
  type: 'venue' | 'brand' | 'artist' | 'media' | 'supplier'
  contactEmail: string
  relationship: string
  status: 'active' | 'inactive' | 'potential'
  notes?: string
}

export interface AudioScript {
  id: string
  title: string
  type: 'id' | 'intro' | 'outro' | 'sweeper' | 'talk_bed'
  duration: number // seconds
  content: string
  tags: ('FX' | 'VO' | 'HOOK' | 'CTA')[]
  show?: string // Show ID if specific to a show
  daypart?: 'am' | 'pm' | 'night'
}

export interface Drop {
  id: string
  title: string
  description: string
  products: string[] // Product IDs
  startDate: string
  endDate: string
  totalPieces: number
  priceRange: {
    min: number
    max: number
    currency: string
  }
  status: 'upcoming' | 'live' | 'sold_out' | 'ended'
}

export interface AttributionData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  ref?: string
  qr?: string
  timestamp: number
  attributionMode: 'first_touch' | 'last_touch' | 'time_decay'
}