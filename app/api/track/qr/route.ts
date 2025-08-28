import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { qrCode, sessionId, affiliateId, target, userAgent, referer } = await request.json()
    
    const trackingData = {
      event: 'qr_scan',
      qrCode,
      sessionId,
      affiliateId,
      target,
      timestamp: Date.now(),
      userAgent: userAgent || request.headers.get('user-agent'),
      referer: referer || request.headers.get('referer'),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      country: request.headers.get('cf-ipcountry') || 'unknown'
    }
    
    // Send to Make.com webhook for processing
    const webhookUrl = process.env.MAKE_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'qr_scan',
          data: trackingData
        })
      })
    }
    
    // Track with Google Analytics
    if (process.env.NEXT_PUBLIC_GA_ID) {
      // This would typically be done client-side, but we can also track server-side
      const measurementId = process.env.NEXT_PUBLIC_GA_ID
      const gaData = new URLSearchParams({
        v: '1',
        tid: measurementId,
        cid: sessionId,
        t: 'event',
        ec: 'affiliate',
        ea: 'qr_scan',
        el: qrCode,
        cd1: affiliateId, // Custom dimension 1
        cd2: target      // Custom dimension 2
      })
      
      fetch(`https://www.google-analytics.com/collect?${gaData}`)
        .catch(console.error)
    }
    
    return NextResponse.json({
      success: true,
      tracked: true,
      sessionId,
      timestamp: trackingData.timestamp
    })
    
  } catch (error) {
    console.error('QR tracking error:', error)
    return NextResponse.json(
      { error: 'Failed to track QR scan' },
      { status: 500 }
    )
  }
}

// GET endpoint for retrieving QR scan analytics
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const affiliateId = searchParams.get('affiliateId')
  const days = parseInt(searchParams.get('days') || '7')
  
  if (!affiliateId) {
    return NextResponse.json(
      { error: 'Affiliate ID required' },
      { status: 400 }
    )
  }
  
  // In production, this would query a database
  // For now, return mock analytics data
  const mockAnalytics = {
    affiliateId,
    period: `${days} days`,
    metrics: {
      totalScans: Math.floor(Math.random() * 1000) + 100,
      uniqueScans: Math.floor(Math.random() * 500) + 50,
      conversionRate: (Math.random() * 5 + 1).toFixed(2) + '%',
      revenue: (Math.random() * 1000 + 100).toFixed(2),
      commission: (Math.random() * 100 + 10).toFixed(2)
    },
    topTargets: [
      { target: 'shop', scans: 245, conversions: 12 },
      { target: 'radio', scans: 189, conversions: 8 },
      { target: 'drop', scans: 156, conversions: 15 }
    ],
    recentScans: Array.from({ length: 10 }, (_, i) => ({
      timestamp: Date.now() - (i * 3600000),
      target: ['shop', 'radio', 'drop'][Math.floor(Math.random() * 3)],
      country: ['GB', 'US', 'DE', 'FR'][Math.floor(Math.random() * 4)]
    }))
  }
  
  return NextResponse.json(mockAnalytics)
}