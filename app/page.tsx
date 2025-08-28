'use client'

import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { RadioPlayer } from '../components/RadioPlayer'
import { CrossCTA } from '../components/CrossCTA'
import { captureAttribution } from '../lib/attribution'

function getDaypartGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return { time: 'AM', message: 'Rise and Grind', energy: 'warm' }
  if (hour >= 12 && hour < 20) return { time: 'PM', message: 'Peak Hours', energy: 'soft' }
  return { time: 'NIGHT', message: 'After Dark', energy: 'neon' }
}

export default function Home() {
  useEffect(() => {
    captureAttribution()
  }, [])

  const daypart = getDaypartGreeting()

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container text-center relative z-10">
          <div className="animate-fade">
            <p className="text-sm font-display uppercase tracking-wider opacity-75 mb-4">
              {daypart.time} • {daypart.message}
            </p>
            <h1 className="mb-6 animate-slide">
              HOTMESS<br/>
              <span className="text-accent">LONDON</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Always Too Much, Never Enough
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/shop" className="btn btn-primary animate-roll">
                Shop Now
              </a>
              <a href="/radio" className="btn btn-secondary animate-roll" style={{ animationDelay: '0.2s' }}>
                Listen Live
              </a>
            </div>
          </div>
        </div>
        
        {/* Background gradient based on daypart */}
        <div 
          className={`absolute inset-0 opacity-20 ${
            daypart.energy === 'warm' ? 'bg-gradient-to-br from-orange-900/20 to-red-900/20' :
            daypart.energy === 'soft' ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' :
            'bg-gradient-to-br from-accent/10 to-pink-900/20'
          }`}
        />
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

      {/* Affiliate Teaser */}
      <section className="scroll-section bg-accent/10">
        <div className="container text-center">
          <h2 className="mb-6">Earn with Us</h2>
          <p className="small mb-8 max-w-2xl mx-auto">
            Generate personal QR codes, track performance, get paid.
          </p>
          <CrossCTA 
            primary={{ href: '/affiliate', label: 'Get Started' }}
            secondary={{ href: '/rooms', label: 'Join Community' }}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}