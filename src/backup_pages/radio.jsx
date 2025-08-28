export default function Radio() {
  const src = process.env.VITE_RADIO_STREAM_URL
  return (
    <main style={{minHeight:'100vh',background:'#000',color:'#fff',padding:'48px'}}>
      <div style={{maxWidth:720,margin:'0 auto',textAlign:'center'}}>
        <h1 style={{textTransform:'uppercase',letterSpacing:'.04em'}}>HOTMESS Radio — LIVE</h1>
        <p style={{opacity:.85,marginBottom:24}}>If playback stalls, tap play again.</p>
        <div style={{display:'inline-flex',gap:12,alignItems:'center',padding:16,border:'1px solid rgba(255,255,255,.15)',borderRadius:12}}>
          <span style={{background:'#FF5300',color:'#000',fontWeight:800,padding:'4px 8px',borderRadius:8}}>LIVE</span>
          <audio controls preload="none" src={src} style={{width:420}} />
        </div>
      </div>
    </main>
  )
}