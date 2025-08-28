import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Log the incoming webhook data
    console.log('Make.com webhook received:', body)
    
    // Process different event types
    switch (body.event) {
      case 'qr_generated':
        await handleQRGeneration(body.data)
        break
      case 'qr_scan':
        await handleQRScan(body.data)
        break
      case 'short_url_click':
        await handleShortUrlClick(body.data)
        break
      case 'conversion':
        await handleConversion(body.data)
        break
      default:
        console.log('Unknown event type:', body.event)
    }
    
    return NextResponse.json({ success: true, processed: body.event })
    
  } catch (error) {
    console.error('Make webhook error:', error)
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    )
  }
}

async function handleQRGeneration(data: any) {
  // Send to Google Sheets via Make.com
  // This would typically update a spreadsheet with QR generation data
  console.log('QR Generated:', data)
}

async function handleQRScan(data: any) {
  // Track QR scans for affiliate reporting
  console.log('QR Scanned:', data)
}

async function handleShortUrlClick(data: any) {
  // Track short URL clicks
  console.log('Short URL clicked:', data)
}

async function handleConversion(data: any) {
  // Track conversions for affiliate commissions
  console.log('Conversion tracked:', data)
}