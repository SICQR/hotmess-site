'use client'

import { useEffect, useState } from 'react'
import { CrossCTA } from '../../components/CrossCTA'

interface WeatherData {
  location: string
  temperature: number
  condition: string
  emoji: string
  description: string
  arOverlay?: string
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData[]>([
    {
      location: 'London',
      temperature: 16,
      condition: 'Partly Cloudy',
      emoji: '🌤️',
      description: 'Perfect weather for outdoor events'
    },
    {
      location: 'Event Venues',
      temperature: 18,
      condition: 'Clear',
      emoji: '☀️',
      description: 'Ideal conditions for popup shops',
      arOverlay: 'Unlock sunny day filters'
    },
    {
      location: 'Shoreditch',
      temperature: 15,
      condition: 'Light Rain',
      emoji: '🌧️',
      description: 'Indoor venues recommended'
    },
    {
      location: 'Camden',
      temperature: 17,
      condition: 'Overcast',
      emoji: '☁️',
      description: 'Moody vibes for radio shows'
    }
  ])

  const [personalizedLocation, setPersonalizedLocation] = useState('London')

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">Weather Feed</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            London weather, event conditions, and AR overlays
          </p>
          
          {/* Location Personalization */}
          <div className="mb-8">
            <label className="block text-sm font-display font-bold uppercase mb-2">
              Personalize Location
            </label>
            <select 
              value={personalizedLocation}
              onChange={(e) => setPersonalizedLocation(e.target.value)}
              className="bg-white/10 border border-white/20 rounded px-4 py-2 text-white"
            >
              <option value="London">London</option>
              <option value="Manchester">Manchester</option>
              <option value="Brighton">Brighton</option>
              <option value="Glasgow">Glasgow</option>
            </select>
          </div>
        </div>
      </section>

      {/* Current Weather */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Current Conditions</h2>
          <div className="grid grid-2 mb-8">
            {weather.map((w, i) => (
              <div key={i} className="weather-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{w.emoji}</div>
                  <div>
                    <h3 className="mb-1">{w.location}</h3>
                    <p className="text-2xl font-bold">{w.temperature}°C</p>
                    <p className="small opacity-75">{w.condition}</p>
                  </div>
                </div>
                <p className="mb-2">{w.description}</p>
                {w.arOverlay && (
                  <div className="border-t border-accent/30 pt-2 mt-2">
                    <p className="small text-accent">🔓 {w.arOverlay}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Weather */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">Events & Weather</h2>
          <div className="grid grid-3 mb-8">
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3>Tonight's Drop</h3>
                <span className="text-2xl">🌧️</span>
              </div>
              <p className="small mb-2">SUPERHUNG Collection</p>
              <p className="small opacity-75">Moving to indoor venue due to rain</p>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="small text-accent">Weather-reactive AR unlocked</p>
              </div>
            </div>
            
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3>Radio Live</h3>
                <span className="text-2xl">☀️</span>
              </div>
              <p className="small mb-2">Rooftop Session</p>
              <p className="small opacity-75">Perfect conditions for outdoor broadcast</p>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="small text-accent">Solar-powered AR effects</p>
              </div>
            </div>
            
            <div className="card">
              <div className="flex justify-between items-start mb-3">
                <h3>Community Meet</h3>
                <span className="text-2xl">🌤️</span>
              </div>
              <p className="small mb-2">Hyde Park Picnic</p>
              <p className="small opacity-75">Partly cloudy, ideal for gathering</p>
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="small text-accent">Group AR challenges available</p>
              </div>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '/events', label: 'View All Events' }}
            secondary={{ href: '/ar-unlock', label: 'AR Portal' }}
          />
        </div>
      </section>

      {/* 7-Day Forecast */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">7-Day Forecast</h2>
          <div className="grid grid-7 mb-8">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="text-center p-4 border border-white/10 rounded">
                <p className="font-display font-bold mb-2">{day}</p>
                <div className="text-2xl mb-2">
                  {i % 3 === 0 ? '☀️' : i % 3 === 1 ? '🌤️' : '🌧️'}
                </div>
                <p className="text-sm">{15 + i}°C</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}