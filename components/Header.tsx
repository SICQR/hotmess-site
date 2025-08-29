'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function Item({ href, children }: { href:string; children:React.ReactNode }) {
  const path = usePathname();
  const active = path === href || (href !== "/" && path?.startsWith(href));
  return (
    <Link href={href} aria-current={active ? "page" : undefined}>
      {children}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold tracking-wide text-xl">HOTMESS</Link>
        <nav className="nav flex gap-2 overflow-x-auto">
          <Item href="/">Home</Item>
          <Item href="/radio">Radio</Item>
          <Item href="/drop">Drop</Item>
          <Item href="/hand-in-hand">Care</Item>
          <Item href="/affiliate">Affiliates</Item>
        </nav>
      </div>
    </header>
  );
}