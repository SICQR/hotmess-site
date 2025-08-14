import { useEffect, useState } from 'react'

export default function NowPlaying(){
  const [np, setNp] = useState({ title:'HOTMESS Radio Live', artist:'' })

  useEffect(()=>{
    let t = setInterval(async ()=>{
      try {
        const r = await fetch('/api/nowplaying')
        const j = await r.json()
        setNp(j)
      } catch {}
    }, 10000)
    return ()=>clearInterval(t)
  }, [])

  return (
    <p className="small">Now Playing: {np.title}{np.artist?` — ${np.artist}`:''}</p>
  )
}
