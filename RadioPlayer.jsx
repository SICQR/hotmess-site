import { useEffect, useRef, useState } from 'react'

export default function RadioPlayer(){
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const src = process.env.VITE_RADIO_STREAM_URL

  function toggle(){
    const a = audioRef.current
    if (!a) return
    if (a.paused) { a.play(); setPlaying(true) } else { a.pause(); setPlaying(false) }
  }

  useEffect(()=>{
    const a = audioRef.current
    if (a) { a.src = src }
  }, [src])

  return (
    <div className="radio-panel">
      <span className="badge">LIVE</span>
      <strong>HOTMESS Radio</strong>
      <button className="btn btn-secondary" onClick={toggle}>{playing? 'Pause' : 'Play'}</button>
      <audio ref={audioRef} preload="none" />
    </div>
  )
}
