'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/radio', label: 'Radio' },
  { href: '/shop', label: 'Shop' },
  { href: '/lookbook', label: 'Lookbook' },
  { href: '/drop', label: 'Drop' },
  { href: '/hand-in-hand', label: 'Care' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/affiliate', label: 'Affiliate' },
  { href: '/label', label: 'Label' }
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/15 backdrop-blur-sm">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold tracking-wider">
            HOTMESS
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-display font-bold uppercase tracking-wide transition-colors hover:text-accent ${
                  pathname === href ? 'text-accent' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/15">
            <div className="flex flex-col gap-4">
              {NAVIGATION_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm font-display font-bold uppercase tracking-wide transition-colors hover:text-accent ${
                    pathname === href ? 'text-accent' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}