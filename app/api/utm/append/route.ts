import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'

// In production, this would use a database
// For now, we'll use a simple in-memory store
const shortUrlStore = new Map<string, { target: string; affiliateId: string; created: number }>()

export async function POST(request: NextRequest) {
  try {
    const { target, affiliateId } = await request.json()
    
    if (!target || !affiliateId) {
      return NextResponse.json(
        { error: 'Target URL and affiliate ID are required' },
        { status: 400 }
      )
    }
    
    // Generate short code
    const shortCode = nanoid(8)
    
    // Store mapping
    shortUrlStore.set(shortCode, {
      target,
      affiliateId,
      created: Date.now()
    })
    
    // In production, also store UTM data in database/analytics
    const utmData = {
      shortCode,
      target,
      affiliateId,
      timestamp: Date.now(),
      userAgent: request.headers.get('user-agent'),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    }
    
    // Send to Make.com webhook for tracking
    const webhookUrl = process.env.MAKE_WEBHOOK_URL
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'qr_generated',
          data: utmData
        })
      }).catch(console.error)
    }
    
    return NextResponse.json({
      shortCode,
      shortUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/t/${shortCode}`,
      success: true
    })
    
  } catch (error) {
    console.error('UTM append error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  // Return statistics (for admin/debugging)
  return NextResponse.json({
    totalCodes: shortUrlStore.size,
    stats: Array.from(shortUrlStore.entries()).map(([code, data]) => ({
      code,
      affiliateId: data.affiliateId,
      created: new Date(data.created).toISOString()
    }))
  })
}