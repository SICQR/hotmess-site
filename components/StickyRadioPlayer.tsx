'use client'

import { useEffect, useState, useRef } from 'react'
import { analytics } from '../src/lib/analytics'

export function StickyRadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [streamUrl, setStreamUrl] = useState('')
  const [isClient, setIsClient] = useState(false)
  const [nowPlaying, setNowPlaying] = useState<string>('HOTMESS Radio')
  const [isMinimized, setIsMinimized] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // SSR-safe initialization
    setIsClient(true)
    setStreamUrl(process.env.NEXT_PUBLIC_RADIO_STREAM_URL || '')
  }, [])

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
      analytics.radioPlay('player_bar')
    }
  }

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
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
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-t border-white/15">
      <div className="container">
        <div className="flex items-center justify-between py-3">
          {/* Radio Info */}
          <div className="flex items-center gap-3">
            <span className="bg-accent text-black font-bold px-2 py-1 rounded text-xs animate-ripple">
              LIVE
            </span>
            <div className="text-sm">
              <p className="font-display font-bold">HOTMESS RADIO</p>
              {!isMinimized && (
                <p className="text-xs opacity-75">
                  {nowPlaying}
                </p>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={isPlaying ? handlePause : handlePlay}
              onKeyDown={handleKeyDown}
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black"
              aria-label={isPlaying ? 'Pause radio' : 'Play radio'}
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white/60 hover:text-white transition-colors text-sm"
              aria-label={isMinimized ? 'Expand player' : 'Minimize player'}
            >
              {isMinimized ? '⬆️' : '⬇️'}
            </button>
          </div>

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
    </div>
  )
}