import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = new URL(req.url);
  const aff = url.searchParams.get('aff') || url.searchParams.get('utm_source') || url.searchParams.get('ref');
  if (aff) {
    const res = NextResponse.next();
    res.cookies.set('hm_aff', aff, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    return res;
  }
  return NextResponse.next();
}