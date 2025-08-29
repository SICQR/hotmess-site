import Link from "next/link";
export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="container grid gap-6 py-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold">HOTMESS</h4>
          <p className="opacity-70 text-sm">Always Too Much, Never Enough. Queer fashion, radio, aftercare. London.</p>
        </div>
        <div>
          <h4 className="font-semibold">Navigate</h4>
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="/">Home</Link>
            <Link href="/radio">Radio</Link>
            <Link href="/drop">Drop</Link>
            <Link href="/hand-in-hand">Care</Link>
            <Link href="/affiliate">Affiliates</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-semibold">Legal</h4>
          <nav className="flex flex-col gap-1 text-sm">
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/age">Age</Link>
          </nav>
        </div>
      </div>
      <div className="container flex items-center justify-between border-t border-white/10 py-4 text-xs opacity-70">
        <span>© {new Date().getFullYear()} HOTMESS London</span>
        <span>Scan, gag, repeat.</span>
      </div>
    </footer>
  );
}