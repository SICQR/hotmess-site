import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 mt-auto">
      <div className="container py-12">
        <div className="grid grid-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">HOTMESS</h3>
            <p className="text-sm opacity-85 mb-4">
              Always Too Much, Never Enough
            </p>
            <p className="text-xs opacity-75">
              Queer fashion, radio, and aftercare. London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Navigate</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/radio" className="hover:text-accent transition-colors">Radio</Link>
              <Link href="/shop" className="hover:text-accent transition-colors">Shop</Link>
              <Link href="/drop" className="hover:text-accent transition-colors">Drops</Link>
              <Link href="/lookbook" className="hover:text-accent transition-colors">Lookbook</Link>
              <Link href="/hand-in-hand" className="hover:text-accent transition-colors">Care</Link>
              <Link href="/affiliate" className="hover:text-accent transition-colors">Affiliate</Link>
            </div>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/legal/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
              <Link href="/legal/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link>
              <Link href="/legal/age" className="hover:text-accent transition-colors">Age Verification</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-75">
            © {new Date().getFullYear()} HOTMESS London. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <span className="opacity-75">SCAN, GAG, REPEAT</span>
            <span className="text-accent">HUNG? SCAN HERE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}