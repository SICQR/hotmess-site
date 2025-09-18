'use client'

import { useState, useRef } from 'react'
import { CrossCTA } from '../../components/CrossCTA'

interface ARUnlock {
  id: string
  title: string
  type: 'product' | 'event' | 'weather' | 'special'
  description: string
  unlocked: boolean
  qrRequired: boolean
  content: {
    image?: string
    video?: string
    text?: string
    interactive?: boolean
  }
}

export default function ARUnlock() {
  const [isScanning, setIsScanning] = useState(false)
  const [scannedCode, setScannedCode] = useState<string>('')
  const [currentUnlock, setCurrentUnlock] = useState<ARUnlock | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [unlocks] = useState<ARUnlock[]>([
    {
      id: '1',
      title: 'SUPERHUNG Vest AR Try-On',
      type: 'product',
      description: 'Virtual fitting room experience for the SUPERHUNG vest collection',
      unlocked: false,
      qrRequired: true,
      content: {
        interactive: true,
        text: 'Try on different sizes and colors virtually'
      }
    },
    {
      id: '2',
      title: 'HNH MESS Aftercare Guide',
      type: 'product',
      description: 'Interactive aftercare resources and wellness tips',
      unlocked: true,
      qrRequired: true,
      content: {
        text: 'Comprehensive aftercare guide with personalized recommendations',
        interactive: true
      }
    },
    {
      id: '3',
      title: 'Weather-Reactive Filters',
      type: 'weather',
      description: 'AR filters that change based on current London weather',
      unlocked: true,
      qrRequired: false,
      content: {
        text: 'Dynamic AR filters: Sunny = golden hour, Rainy = neon reflections',
        interactive: true
      }
    },
    {
      id: '4',
      title: 'Event Location Guide',
      type: 'event',
      description: 'AR navigation and exclusive content at event venues',
      unlocked: false,
      qrRequired: true,
      content: {
        text: 'Point your camera at venues to reveal hidden content and directions'
      }
    }
  ])

  const handleQRScan = () => {
    setIsScanning(true)
    // Simulate QR scan process
    setTimeout(() => {
      setIsScanning(false)
      setScannedCode('HOTMESS_SUPERHUNG_VEST_001')
      
      // Find matching unlock
      const unlock = unlocks.find(u => u.id === '1')
      if (unlock) {
        setCurrentUnlock({ ...unlock, unlocked: true })
      }
    }, 2000)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Simulate QR code detection from image
      setScannedCode('HOTMESS_EVENT_LOCATION_004')
      const unlock = unlocks.find(u => u.id === '4')
      if (unlock) {
        setCurrentUnlock({ ...unlock, unlocked: true })
      }
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'product': return 'text-accent'
      case 'event': return 'text-green-400'
      case 'weather': return 'text-blue-400'
      case 'special': return 'text-purple-400'
      default: return 'text-white'
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">AR Portal</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Scan QR codes to unlock exclusive AR experiences and digital content
          </p>
          
          {/* Scanner Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={handleQRScan}
              disabled={isScanning}
              className="btn btn-primary"
            >
              {isScanning ? 'Scanning...' : '📱 Scan QR Code'}
            </button>
            
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="btn btn-secondary"
            >
              📸 Upload Image
            </button>
            
            <input 
              ref={fileInputRef}
              type="file" 
              accept="image/*" 
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>

          {scannedCode && (
            <div className="bg-green-500/20 border border-green-500/50 rounded p-4 mb-8 max-w-md mx-auto">
              <p className="small text-green-400 mb-1">QR Code Detected:</p>
              <p className="font-mono text-sm">{scannedCode}</p>
            </div>
          )}
        </div>
      </section>

      {/* Current Unlock */}
      {currentUnlock && (
        <section className="scroll-section bg-accent/10">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-6">🔓 Unlocked!</h2>
              <div className="card">
                <h3 className="mb-4">{currentUnlock.title}</h3>
                <p className="mb-4">{currentUnlock.description}</p>
                
                {currentUnlock.content.interactive && (
                  <div className="bg-white/10 rounded p-6 mb-4">
                    <p className="mb-4">🎮 Interactive AR Experience Ready</p>
                    <button className="btn btn-primary">Launch AR</button>
                  </div>
                )}
                
                {currentUnlock.content.text && (
                  <div className="text-left bg-white/5 rounded p-4">
                    <p className="small">{currentUnlock.content.text}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Available Unlocks */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Available AR Experiences</h2>
          <div className="grid grid-2 mb-8">
            {unlocks.map((unlock) => (
              <div key={unlock.id} className={`card ${unlock.unlocked ? 'border-green-500/50' : 'opacity-60'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`text-sm font-display font-bold uppercase ${getTypeColor(unlock.type)}`}>
                      {unlock.type}
                    </span>
                    <h3 className="mt-1">{unlock.title}</h3>
                  </div>
                  <div className="text-2xl">
                    {unlock.unlocked ? '🔓' : '🔒'}
                  </div>
                </div>
                
                <p className="mb-4">{unlock.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className={`small ${unlock.unlocked ? 'text-green-400' : 'text-yellow-400'}`}>
                    {unlock.unlocked ? '✅ Unlocked' : unlock.qrRequired ? '🔍 QR Required' : '📱 Direct Access'}
                  </span>
                  
                  {unlock.unlocked && (
                    <button className="btn btn-secondary text-sm">
                      Launch
                    </button>
                  )}
                </div>
                
                {unlock.content.interactive && unlock.unlocked && (
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <p className="small text-accent">🎮 Interactive experience available</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">How AR Unlock Works</h2>
          <div className="grid grid-3 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="mb-2">1. Scan</h3>
              <p className="small">Use your camera to scan QR codes on products, events, or locations</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="mb-2">2. Unlock</h3>
              <p className="small">Instantly access exclusive AR content and interactive experiences</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="mb-2">3. Experience</h3>
              <p className="small">Enjoy virtual try-ons, guides, filters, and location-based content</p>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '/shop', label: 'Shop Products' }}
            secondary={{ href: '/events', label: 'Find Events' }}
          />
        </div>
      </section>

      {/* QR Code Gallery */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Find QR Codes</h2>
          <div className="grid grid-4 mb-8">
            <div className="card text-center">
              <div className="text-3xl mb-3">📦</div>
              <h4 className="mb-2">Product Packaging</h4>
              <p className="small">Every HOTMESS product includes AR-enabled QR codes</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">🎪</div>
              <h4 className="mb-2">Event Venues</h4>
              <p className="small">Scan codes at popup shops and events for exclusive content</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">📻</div>
              <h4 className="mb-2">Radio Shows</h4>
              <p className="small">QR codes during live broadcasts unlock special experiences</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl mb-3">🏙️</div>
              <h4 className="mb-2">London Locations</h4>
              <p className="small">Discover hidden AR content around the city</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}