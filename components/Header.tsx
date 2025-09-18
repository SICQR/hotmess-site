'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/radio', label: 'Radio' },
  { href: '/events', label: 'Events' },
  { href: '/weather', label: 'Weather' },
  { href: '/community', label: 'Community' },
  { href: '/hand-in-hand', label: 'Care' },
  { href: '/affiliate', label: 'Affiliate' }
]

const SHOP_LINKS = [
  { href: '/shop', label: 'All Products' },
  { href: '/shop/drops', label: 'Latest Drops' },
  { href: '/shop/collections', label: 'Collections' },
  { href: '/lookbook', label: 'Lookbook' },
  { href: '/ar-unlock', label: 'AR Portal' },
  { href: '/leaderboard', label: 'Leaderboard' }
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false)

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
            
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                className={`text-sm font-display font-bold uppercase tracking-wide transition-colors hover:text-accent ${
                  pathname.startsWith('/shop') || pathname.startsWith('/lookbook') ? 'text-accent' : ''
                }`}
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                Shop
              </button>
              {shopDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm border border-white/15 rounded-lg py-2 z-50"
                  onMouseEnter={() => setShopDropdownOpen(true)}
                  onMouseLeave={() => setShopDropdownOpen(false)}
                >
                  {SHOP_LINKS.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-sm font-display font-bold uppercase tracking-wide transition-colors hover:text-accent hover:bg-white/5"
                      onClick={() => setShopDropdownOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Listen Live Button */}
            <Link href="/radio" className="btn btn-secondary text-xs px-4 py-2">
              Listen Live
            </Link>
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
              
              {/* Mobile Shop Section */}
              <div className="border-t border-white/15 pt-4">
                <p className="text-xs font-display font-bold uppercase tracking-wide opacity-75 mb-2">Shop</p>
                {SHOP_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="block text-sm font-display font-bold uppercase tracking-wide transition-colors hover:text-accent ml-4 mb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              
              {/* Mobile Listen Live */}
              <Link 
                href="/radio" 
                className="btn btn-secondary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Listen Live
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}