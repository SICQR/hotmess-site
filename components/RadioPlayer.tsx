'use client'

import { useEffect, useState, useRef } from 'react'
import { analytics } from '../src/lib/analytics'

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [streamUrl, setStreamUrl] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [nowPlaying, setNowPlaying] = useState<{artist: string, title: string}>({artist: 'HOTMESS', title: 'Radio'})
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // SSR-safe initialization
    setIsClient(true)
    const stream = 
      process.env.NEXT_PUBLIC_RADIO_STREAM_URL ||
      process.env.NEXT_PUBLIC_STREAM_URL ||
      process.env.VITE_RADIO_STREAM_URL ||
      process.env.RADIOKING_STREAM_URL ||
      '';
    setStreamUrl(stream)

    // Fetch now playing info
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/nowplaying')
        if (response.ok) {
          const data = await response.json()
          setNowPlaying(data)
          if (data.title !== 'Live') {
            analytics.radioNowPlaying(data.title, data.artist)
          }
        }
      } catch (error) {
        console.warn('Failed to fetch now playing:', error)
      }
    }

    fetchNowPlaying()
    
    // Update now playing every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
      // Track analytics event
      analytics.radioPlay('player_bar')
    }
  }

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      // Track analytics event
      analytics.radioPause('player_bar')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault()
      if (isPlaying) {
        handlePause()
      } else {
        handlePlay()
      }
    }
  }

  // Don't render on server or if no stream URL
  if (!isClient || !streamUrl) {
    return (
      <div className="text-center animate-fade">
        <h3 className="font-display font-bold mb-4">HOTMESS Radio — LIVE</h3>
        <p className="small mb-6 opacity-85">
          Loading player...
        </p>
        <div className="inline-flex items-center gap-4 p-4 border border-white/15 rounded-xl bg-black/20 backdrop-blur-sm">
          <span className="bg-accent text-black font-bold px-3 py-1 rounded text-sm">
            LIVE
          </span>
          <div className="w-64 h-8 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    )
  }

  return (
    <div className="text-center animate-fade">
      <h3 className="font-display font-bold mb-4">HOTMESS Radio — LIVE</h3>
      <p className="small mb-6 opacity-85">
        No autoplay. Click play to tune in.
      </p>
      <div className="inline-flex items-center gap-4 p-4 border border-white/15 rounded-xl bg-black/20 backdrop-blur-sm">
        <span className="bg-accent text-black font-bold px-3 py-1 rounded text-sm animate-ripple">
          LIVE
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={isPlaying ? handlePause : handlePlay}
            onKeyDown={handleKeyDown}
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
            aria-label={isPlaying ? 'Pause radio' : 'Play radio'}
          >
            {isPlaying ? '⏸️' : '▶️'} {isPlaying ? 'Pause' : 'Play'}
          </button>
          <audio 
            ref={audioRef}
            preload="none" 
            src={streamUrl}
            onPlay={() => {
              setIsPlaying(true)
              analytics.radioPlay('player_bar')
            }}
            onPause={() => {
              setIsPlaying(false)
              analytics.radioPause('player_bar')
            }}
            onLoadStart={() => setNowPlaying({artist: 'HOTMESS', title: 'Connecting...'})}
            onCanPlay={() => {
              // Keep current now playing info when audio is ready
              analytics.radioNowPlaying(nowPlaying.title, nowPlaying.artist)
            }}
            className="hidden"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm opacity-75">
          Now Playing: {nowPlaying.artist} - {nowPlaying.title}
        </p>
        {isPlaying && (
          <p className="text-xs mt-2 opacity-60 animate-fade">
            Streaming live from London
          </p>
        )}
      </div>
    </div>
  )
}