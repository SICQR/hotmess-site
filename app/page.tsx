'use client'

import { useEffect } from 'react'
import { Hero } from '../components/Hero'
import { RadioPlayer } from '../components/RadioPlayer'
import { CrossCTA } from '../components/CrossCTA'
import { captureAttribution } from '../lib/attribution'

export default function Home() {
  useEffect(() => {
    captureAttribution()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Feature Strip */}
      <section className="scroll-section py-8">
        <div className="container">
          <div className="grid grid-5 text-center gap-6">
            <a href="/shop" className="feature-icon-link">
              <div className="feature-icon">🛍️</div>
              <span className="text-sm font-display font-bold uppercase">Shop Drops</span>
            </a>
            <a href="/ar-unlock" className="feature-icon-link">
              <div className="feature-icon">🔓</div>
              <span className="text-sm font-display font-bold uppercase">Unlock AR</span>
            </a>
            <a href="/radio" className="feature-icon-link">
              <div className="feature-icon">📻</div>
              <span className="text-sm font-display font-bold uppercase">Listen Radio</span>
            </a>
            <a href="/weather" className="feature-icon-link">
              <div className="feature-icon">🌤️</div>
              <span className="text-sm font-display font-bold uppercase">Weather</span>
            </a>
            <a href="/leaderboard" className="feature-icon-link">
              <div className="feature-icon">🏆</div>
              <span className="text-sm font-display font-bold uppercase">Leaderboard</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mini Radio Player */}
      <section className="scroll-section">
        <div className="container">
          <RadioPlayer />
        </div>
      </section>

      {/* Latest Drops */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Latest Drops</h2>
          <div className="grid grid-3 mb-8">
            <a href="/shop" className="card animate-fade">
              <img src="/images/superhung-vest.svg" alt="SUPERHUNG Vest" className="w-full h-48 object-cover mb-4 rounded" />
              <div>
                <h3 className="mb-2">SUPERHUNG Vest</h3>
                <p className="small">Gym-to-rave flex. Limited.</p>
              </div>
            </a>
            <a href="/shop" className="card animate-fade" style={{ animationDelay: '0.1s' }}>
              <img src="/images/hnh-lube.svg" alt="HNH MESS Lube" className="w-full h-48 object-cover mb-4 rounded" />
              <div>
                <h3 className="mb-2">HNH MESS Lube</h3>
                <p className="small">The only lube with real aftercare.</p>
              </div>
            </a>
            <a href="/radio" className="card animate-fade" style={{ animationDelay: '0.2s' }}>
              <img src="/images/radio-banner.svg" alt="HOTMESS Radio" className="w-full h-48 object-cover mb-4 rounded" />
              <div>
                <h3 className="mb-2">HOTMESS Radio</h3>
                <p className="small">Live DJs. Stingers. Aftercare Sundays.</p>
              </div>
            </a>
          </div>
          <CrossCTA 
            primary={{ href: '/shop', label: 'Shop All' }}
            secondary={{ href: '/lookbook', label: 'View Lookbook' }}
          />
        </div>
      </section>

      {/* Collections Preview */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Collections</h2>
          <div className="grid grid-3 mb-8">
            <div className="card animate-fade">
              <div className="text-center">
                <h3 className="mb-2">RAW</h3>
                <p className="small">Leather-lux grit.</p>
              </div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-center">
                <h3 className="mb-2">HUNG</h3>
                <p className="small">Body-con gym-to-rave.</p>
              </div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-center">
                <h3 className="mb-2">HIGH</h3>
                <p className="small">Varsity-coded euphoria.</p>
              </div>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/shop', label: 'Explore Collections' }}
            secondary={{ href: '/drop', label: 'View Drops' }}
          />
        </div>
      </section>

      {/* Radio Section */}
      <section className="scroll-section bg-black">
        <div className="container text-center">
          <h2 className="mb-6">Listen Live</h2>
          <p className="small mb-8 max-w-2xl mx-auto">
            24/7 HOTMESS Radio, on-brand and unapologetic.
          </p>
          <CrossCTA 
            primary={{ href: '/radio', label: 'Go to Radio' }}
            secondary={{ href: '/rooms', label: 'Join Rooms' }}
          />
        </div>
      </section>

      {/* Weather Feed */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Weather</h2>
          <div className="grid grid-3 mb-8">
            <div className="weather-card text-center">
              <div className="weather-emoji mb-2">🌤️</div>
              <h3 className="mb-2">London</h3>
              <p className="small">16°C • Partly Cloudy</p>
              <p className="small opacity-75">Perfect for events</p>
            </div>
            <div className="weather-card text-center">
              <div className="weather-emoji mb-2">🌧️</div>
              <h3 className="mb-2">Events</h3>
              <p className="small">Rain tonight</p>
              <p className="small opacity-75">Indoor venues ready</p>
            </div>
            <div className="weather-card text-center">
              <div className="weather-emoji mb-2">🔥</div>
              <h3 className="mb-2">AR Overlays</h3>
              <p className="small">Weather reactive</p>
              <p className="small opacity-75">Unlock special content</p>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/weather', label: 'Full Weather' }}
            secondary={{ href: '/events', label: 'View Events' }}
          />
        </div>
      </section>

      {/* Community Feed */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Community</h2>
          <div className="grid grid-2 mb-8">
            <div>
              <h3 className="mb-4">Recent Posts</h3>
              <div className="community-post">
                <p className="small mb-1">@daddy_longlegs</p>
                <p>Just copped the new SUPERHUNG vest 🔥</p>
              </div>
              <div className="community-post">
                <p className="small mb-1">@rave_queen</p>
                <p>Tonight's radio show was incredible! More Aftercare Sundays pls</p>
              </div>
              <div className="community-post">
                <p className="small mb-1">@mesh_master</p>
                <p>AR unlock was worth the wait 👀</p>
              </div>
            </div>
            <div>
              <h3 className="mb-4">Leaderboard</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                  <span>🥇 @top_affiliate</span>
                  <span className="text-accent">£2,340</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                  <span>🥈 @sales_king</span>
                  <span className="text-accent">£1,890</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded">
                  <span>🥉 @drops_hunter</span>
                  <span className="text-accent">£1,420</span>
                </div>
              </div>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/community', label: 'Join Community' }}
            secondary={{ href: '/leaderboard', label: 'Full Leaderboard' }}
          />
        </div>
      </section>

      {/* Partner Strip */}
      <section className="scroll-section bg-white/5">
        <div className="container text-center">
          <h2 className="mb-8">Partners</h2>
          <div className="grid grid-4 items-center mb-8">
            <div className="partner-logo text-center">
              <div className="text-2xl font-display font-bold">VENUE</div>
            </div>
            <div className="partner-logo text-center">
              <div className="text-2xl font-display font-bold">BRAND</div>
            </div>
            <div className="partner-logo text-center">
              <div className="text-2xl font-display font-bold">ARTIST</div>
            </div>
            <div className="partner-logo text-center">
              <div className="text-2xl font-display font-bold">MEDIA</div>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/partners', label: 'View All Partners' }}
            secondary={{ href: '/contact', label: 'Become a Partner' }}
          />
        </div>
      </section>

      {/* Care Section */}
      <section className="scroll-section">
        <div className="container text-center">
          <h2 className="mb-6">Care</h2>
          <p className="small mb-8 max-w-2xl mx-auto">
            Hand N Hand: the only lube with real aftercare.
          </p>
          <CrossCTA 
            primary={{ href: '/hand-in-hand', label: 'Care & Support' }}
            secondary={{ href: '/affiliate', label: 'Join Affiliate' }}
          />
        </div>
      </section>

      {/* Affiliate Program */}
      <section className="scroll-section bg-accent/10">
        <div className="container text-center">
          <h2 className="mb-6">Affiliate Program</h2>
          <p className="small mb-8 max-w-2xl mx-auto">
            Generate personal QR codes, track performance, get paid.
          </p>
          <CrossCTA 
            primary={{ href: '/affiliate', label: 'Get Started' }}
            secondary={{ href: '/rooms', label: 'Join Community' }}
          />
        </div>
      </section>
    </>
  )
}