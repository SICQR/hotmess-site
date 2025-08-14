import { useEffect, useState } from 'react'

export default function ChatWidget(){
  const [open, setOpen] = useState(false)
  const enabled = !!process.env.OPENAI_API_KEY // toggle by env presence (bundled via next.config)

  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([{ role:'system', content: 'Welcome to HOTMESS. Keep it bold, keep it kind.' }])
  const [loading, setLoading] = useState(false)

  if (!enabled) return null

  async function send(){
    if (!input.trim()) return
    const userMsg = { role:'user', content: input }
    setMsgs([...msgs, userMsg])
    setLoading(true); setInput('')
    try {
      const r = await fetch('/api/bot', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ messages:[...msgs, userMsg] }) })
      const j = await r.json()
      setMsgs(m=>[...m, { role:'assistant', content: j.msg || 'OK' }])
    } catch (e) {
      setMsgs(m=>[...m, { role:'assistant', content: 'Bot offline. Try later.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{position:'fixed', right:16, bottom:16, zIndex:90}}>
      {!open && (
        <button className="btn btn-primary" onClick={()=>setOpen(true)}>Chat</button>
      )}
      {open && (
        <div style={{width:320, maxHeight:420, background:'#111', border:'1px solid rgba(255,255,255,.1)', borderRadius:12, overflow:'hidden', display:'flex', flexDirection:'column'}}>
          <div style={{padding:'.6rem 1rem', borderBottom:'1px solid rgba(255,255,255,.08)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <strong>HOTMESS Bot</strong>
            <button className="btn btn-secondary" onClick={()=>setOpen(false)}>Close</button>
          </div>
          <div style={{padding:'0.8rem', overflowY:'auto', flex:1}}>
            {msgs.map((m,i)=>(
              <div key={i} style={{marginBottom:'.6rem'}}>
                <div className="small" style={{opacity:.7}}>{m.role}</div>
                <div>{m.content}</div>
              </div>
            ))}
            {loading && <div className="small">Typing…</div>}
          </div>
          <div style={{display:'flex', gap:6, padding:'0.6rem'}}>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Say it..." style={{flex:1, padding:'.6rem', borderRadius:8, border:'1px solid #333', background:'#0c0c0c', color:'#fff'}} />
            <button className="btn btn-primary" onClick={send}>Send</button>
          </div>
        </div>
      )}
    </div>
  )
}
