'use client'

import { useState } from 'react'
import { CrossCTA } from '../../components/CrossCTA'

interface Event {
  id: string
  title: string
  type: 'drop' | 'irl' | 'virtual' | 'radio'
  date: string
  time: string
  location: string
  weather: {
    condition: string
    emoji: string
    temp: number
  }
  description: string
  rsvpCount: number
  capacity: number
  ticketsAvailable: boolean
  priceRange?: string
}

export default function Events() {
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'SUPERHUNG Collection Drop',
      type: 'drop',
      date: '2024-01-15',
      time: '19:00',
      location: 'Shoreditch Popup',
      weather: { condition: 'Clear', emoji: '☀️', temp: 18 },
      description: 'Exclusive launch of our latest gym-to-rave pieces. Limited quantities.',
      rsvpCount: 247,
      capacity: 300,
      ticketsAvailable: true,
      priceRange: '£40-120'
    },
    {
      id: '2',
      title: 'HOTMESS Radio Live: Aftercare Sunday',
      type: 'radio',
      date: '2024-01-14',
      time: '14:00',
      location: 'Rooftop Studio',
      weather: { condition: 'Partly Cloudy', emoji: '⛅', temp: 16 },
      description: 'Live radio show with special guests, wellness talks, and exclusive tracks.',
      rsvpCount: 89,
      capacity: 100,
      ticketsAvailable: true
    },
    {
      id: '3',
      title: 'Community Meetup: Pride Month Celebration',
      type: 'irl',
      date: '2024-01-20',
      time: '17:00',
      location: 'Hyde Park',
      weather: { condition: 'Light Rain', emoji: '🌧️', temp: 15 },
      description: 'Monthly community gathering with games, music, and networking. All welcome!',
      rsvpCount: 156,
      capacity: 200,
      ticketsAvailable: true
    },
    {
      id: '4',
      title: 'Virtual Fitting Room Launch',
      type: 'virtual',
      date: '2024-01-18',
      time: '20:00',
      location: 'Online',
      weather: { condition: 'N/A', emoji: '💻', temp: 0 },
      description: 'Experience our new AR fitting technology. Try before you buy from anywhere.',
      rsvpCount: 432,
      capacity: 1000,
      ticketsAvailable: true
    }
  ])

  const [filter, setFilter] = useState<'all' | 'drop' | 'irl' | 'virtual' | 'radio'>('all')

  const filteredEvents = filter === 'all' ? events : events.filter(e => e.type === filter)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'drop': return 'text-accent'
      case 'irl': return 'text-green-400'
      case 'virtual': return 'text-blue-400'
      case 'radio': return 'text-purple-400'
      default: return 'text-white'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">Events</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Upcoming drops, IRL meetups, virtual events, and live radio shows
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { key: 'all', label: 'All Events' },
              { key: 'drop', label: 'Drops' },
              { key: 'irl', label: 'IRL' },
              { key: 'virtual', label: 'Virtual' },
              { key: 'radio', label: 'Radio' }
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`btn ${filter === key ? 'btn-primary' : 'btn-secondary'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="scroll-section">
        <div className="container">
          <div className="grid grid-2 mb-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-sm font-display font-bold uppercase ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <h3 className="mt-1">{event.title}</h3>
                  </div>
                  {event.weather.emoji !== '💻' && (
                    <div className="text-center">
                      <div className="text-2xl">{event.weather.emoji}</div>
                      <p className="text-xs">{event.weather.temp}°C</p>
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <p className="small mb-1">📅 {formatDate(event.date)} at {event.time}</p>
                  <p className="small mb-2">📍 {event.location}</p>
                  {event.weather.condition !== 'N/A' && (
                    <p className="small mb-2">🌤️ {event.weather.condition}</p>
                  )}
                </div>
                
                <p className="mb-4">{event.description}</p>
                
                {event.priceRange && (
                  <p className="small mb-2 text-accent">💰 {event.priceRange}</p>
                )}
                
                <div className="flex justify-between items-center mb-4">
                  <span className="small">
                    {event.rsvpCount}/{event.capacity} attending
                  </span>
                  <div className="w-32 bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full"
                      style={{ width: `${(event.rsvpCount / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="btn btn-primary flex-1">
                    {event.ticketsAvailable ? 'RSVP' : 'Sold Out'}
                  </button>
                  {event.type === 'drop' && (
                    <button className="btn btn-secondary">Pre-order</button>
                  )}
                </div>
                
                {event.weather.condition === 'Light Rain' && (
                  <div className="mt-3 pt-3 border-t border-yellow-500/30">
                    <p className="small text-yellow-400">⚠️ Weather advisory: Indoor backup venue prepared</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <CrossCTA 
            primary={{ href: '/calendar', label: 'Full Calendar' }}
            secondary={{ href: '/community', label: 'Join Community' }}
          />
        </div>
      </section>

      {/* Upcoming This Week */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">This Week</h2>
          <div className="grid grid-7 mb-8">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={day} className="text-center p-4 border border-white/10 rounded">
                <p className="font-display font-bold mb-2">{day}</p>
                <div className="space-y-1">
                  {i === 2 && <div className="text-xs bg-accent/20 text-accent px-1 py-0.5 rounded">Drop</div>}
                  {i === 5 && <div className="text-xs bg-purple-400/20 text-purple-400 px-1 py-0.5 rounded">Radio</div>}
                  {i === 6 && <div className="text-xs bg-green-400/20 text-green-400 px-1 py-0.5 rounded">IRL</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}