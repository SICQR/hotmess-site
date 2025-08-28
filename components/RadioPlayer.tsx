'use client'

import { useEffect, useState } from 'react'

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [streamUrl, setStreamUrl] = useState('')

  useEffect(() => {
    setStreamUrl(process.env.NEXT_PUBLIC_RADIOKING_STREAM_URL || '')
  }, [])

  if (!streamUrl) return null

  return (
    <div className="text-center animate-fade">
      <h3 className="font-display font-bold mb-4">HOTMESS Radio — LIVE</h3>
      <p className="small mb-6 opacity-85">
        If playback stalls, tap play again.
      </p>
      <div className="inline-flex items-center gap-4 p-4 border border-white/15 rounded-xl bg-black/20 backdrop-blur-sm">
        <span className="bg-accent text-black font-bold px-3 py-1 rounded text-sm animate-ripple">
          LIVE
        </span>
        <audio 
          controls 
          preload="none" 
          src={streamUrl}
          className="max-w-sm"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
      {isPlaying && (
        <p className="text-xs mt-4 opacity-75 animate-fade">
          Now streaming live from London
        </p>
      )}
    </div>
  )
}