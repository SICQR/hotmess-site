import { useEffect, useRef, useState } from 'react'

export default function RadioBar({ className = '' }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [visible, setVisible] = useState(false)
  const src = process.env.VITE_RADIO_STREAM_URL

  function toggle() {
    const audio = audioRef.current
    if (!audio) return
    
    if (audio.paused) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  function hide() {
    const audio = audioRef.current
    if (audio && !audio.paused) {
      audio.pause()
      setPlaying(false)
    }
    setVisible(false)
  }

  useEffect(() => {
    const audio = audioRef.current
    if (audio && src) {
      audio.src = src
    }
  }, [src])

  useEffect(() => {
    // Show radio bar after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible || !src) return null

  return (
    <div className={`radio-bar ${className}`}>
      <div className="radio-bar-content">
        <div className="radio-info">
          <span className="live-badge">LIVE</span>
          <span className="radio-title">HOTMESS Radio</span>
        </div>
        <div className="radio-controls">
          <button 
            className="play-button"
            onClick={toggle}
            aria-label={playing ? 'Pause radio' : 'Play radio'}
          >
            {playing ? '⏸️' : '▶️'}
          </button>
          <button 
            className="close-button"
            onClick={hide}
            aria-label="Close radio player"
          >
            ✕
          </button>
        </div>
      </div>
      <audio 
        ref={audioRef} 
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      
      <style jsx>{`
        .radio-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #FF5300 0%, #ff6b1a 100%);
          color: white;
          padding: 12px 16px;
          z-index: 1000;
          box-shadow: 0 -2px 20px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.3s ease-out;
        }

        .radio-bar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
        }

        .radio-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .live-badge {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          font-weight: 800;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .radio-title {
          font-weight: 600;
          font-size: 14px;
        }

        .radio-controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .play-button,
        .close-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
        }

        .play-button:hover,
        .close-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
        }

        .close-button {
          font-size: 16px;
          font-weight: bold;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .radio-bar {
            padding: 10px 12px;
          }

          .radio-title {
            font-size: 13px;
          }

          .live-badge {
            font-size: 11px;
            padding: 3px 6px;
          }

          .play-button,
          .close-button {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}