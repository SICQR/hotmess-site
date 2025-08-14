import { BRAND } from '@/lib/brand'

export default function RadioPlayer(){
  const src = BRAND.radioStream || 'https://listen.radioking.com/radio/736103/stream/802454'
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>HOTMESS RADIO — On Air</strong>
        <span className="badge">LIVE</span>
      </div>
      <audio controls style={{width:'100%', marginTop:12}}>
        <source src={src} type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
      <div style={{marginTop:10, fontSize:'.95rem', opacity:.8}}>
        Forecast or Foreplay? Tune in. Then shop the drop.
      </div>
    </div>
  )
}