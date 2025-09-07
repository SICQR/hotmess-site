import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require age verification (18+)
const AGE_RESTRICTED_ROUTES = [
  '/rooms', // Contains "After Dark" 18+ content
];

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const response = NextResponse.next();

  // Age gate enforcement for restricted routes
  if (AGE_RESTRICTED_ROUTES.some(route => url.pathname.startsWith(route))) {
    const ageVerified = req.cookies.get('hm_age_verified')?.value;
    
    // If not age verified, redirect to age verification page
    if (!ageVerified) {
      const ageVerificationUrl = new URL('/legal/age', req.url);
      ageVerificationUrl.searchParams.set('return', url.pathname);
      return NextResponse.redirect(ageVerificationUrl);
    }
  }

  // UTM and affiliate parameter tracking
  const utmParams = {
    source: url.searchParams.get('utm_source'),
    medium: url.searchParams.get('utm_medium'), 
    campaign: url.searchParams.get('utm_campaign'),
    content: url.searchParams.get('utm_content'),
    term: url.searchParams.get('utm_term'),
    aff: url.searchParams.get('aff') || url.searchParams.get('ref')
  };

  // Set affiliate/UTM cookies if any parameters are present
  let hasUtmParams = false;
  Object.entries(utmParams).forEach(([key, value]) => {
    if (value) {
      hasUtmParams = true;
      response.cookies.set(`hm_${key}`, value, { 
        path: '/', 
        maxAge: 60 * 60 * 24 * 30, // 30 days
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
    }
  });

  // Set a timestamp for when attribution was captured
  if (hasUtmParams) {
    response.cookies.set('hm_attribution_timestamp', Date.now().toString(), {
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax'
    });
  }

  return response;
}

// Configure which routes this middleware should run on
export const config = {
  matcher: [
    // Match all routes except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|manifest.webmanifest|robots.txt|sitemap.xml).*)',
  ]
};