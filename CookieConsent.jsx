import { useEffect, useState } from 'react'

export default function CookieConsent(){
  const [show, setShow] = useState(false)
  const [allowed, setAllowed] = useState(false)

  useEffect(()=>{
    const ok = localStorage.getItem('hm_cc.analytics') === 'true'
    setAllowed(ok)
    if (!ok) setShow(true)
  }, [])

  function accept(){
    localStorage.setItem('hm_cc.analytics','true')
    setAllowed(true); setShow(false)
    window.dispatchEvent(new Event('hm_cc_update'))
  }

  if (!show) return null
  return (
    <div style={{position:'fixed', bottom:10, left:10, right:10, background:'#111', padding:'1rem', border:'1px solid rgba(255,255,255,.1)', borderRadius:12, zIndex:100}}>
      <p className="small">We use cookies for analytics and pixels. Accept to enable tracking.</p>
      <button className="btn btn-primary" onClick={accept}>Accept</button>
    </div>
  )
}
