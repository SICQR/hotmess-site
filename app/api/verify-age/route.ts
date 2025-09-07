import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { verified } = await request.json()
    
    if (!verified) {
      return NextResponse.json({ error: 'Age verification required' }, { status: 400 })
    }
    
    const response = NextResponse.json({ success: true })
    
    // Set age verification cookie
    response.cookies.set('hm_age_verified', 'true', {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      httpOnly: true // More secure - can't be accessed via JavaScript
    })
    
    return response
  } catch (error) {
    console.error('Age verification error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}