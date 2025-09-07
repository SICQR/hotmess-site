import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AGE_PROTECTED = [/^\/radio(\/\$|\$)/, /^\/shop(\/\$|\$)/, /^\/editorial(\/\$|\$)/];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const res = NextResponse.next();

  // 1) Capture UTM / affiliate cookies for 30 days
  const keys = ["utm_source","utm_medium","utm_campaign","utm_content","utm_term","code","aff"];
  for (const k of keys) {
    const v = url.searchParams.get(k);
    if (v) res.cookies.set(k, v, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  }

  // 2) Age gate for protected sections
  const path = url.pathname;
  const isSystem = path.startsWith("/_next") || path.startsWith("/api") || path.startsWith("/assets");
  const hasAge = req.cookies.get("age_ok")?.value === "true";

  if (!isSystem && !hasAge && AGE_PROTECTED.some((re) => re.test(path)) && !path.startsWith("/age")) {
    const next = encodeURIComponent(url.pathname + (url.search || ""));
    const redirectUrl = new URL(`/age?next=${next}`, url.origin);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

// Ensure it runs broadly but skips obvious static files
export const config = {
  matcher: [
    "/((?!_next|favicon.ico|robots.txt|sitemap.xml|manifest.json|apple-touch-icon.png).*)",
  ],
};