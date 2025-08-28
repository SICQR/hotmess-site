'use client'

import { useEffect, useState, useRef } from 'react'
import { analytics } from '../src/lib/analytics'

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [streamUrl, setStreamUrl] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [nowPlaying, setNowPlaying] = useState<string>('HOTMESS Radio')
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // SSR-safe initialization
    setIsClient(true)
    setStreamUrl(process.env.NEXT_PUBLIC_RADIOKING_STREAM_URL || '')
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
            onLoadStart={() => setNowPlaying('Connecting...')}
            onCanPlay={() => {
              setNowPlaying('HOTMESS Radio')
              analytics.radioNowPlaying('HOTMESS Radio')
            }}
            className="hidden"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm opacity-75">
          Now Playing: {nowPlaying}
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