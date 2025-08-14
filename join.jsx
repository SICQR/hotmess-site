import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QRGenerator from '../components/QRGenerator'
import { useState } from 'react'
import { getAttribution } from '../lib/attribution'

export default function Join(){
  const [email, setEmail] = useState('')
  const [handle, setHandle] = useState('')
  const [status, setStatus] = useState('')

  async function submit(e){
    e.preventDefault()
    setStatus('')
    try {
      const attrib = getAttribution()
      const r = await fetch('/api/submit', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ email, handle, attrib })
      })
      const j = await r.json()
      if (!j.ok) throw new Error(j.error || 'Failed')
      setStatus('Done. Check your inbox.')
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <>
      <Head><title>Join — HOTMESS Affiliate</title></Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h2>Join / Affiliate</h2>
          <p className="small">Generate your shareable QR and earn. Your code persists with every click.</p>
          <div className="grid grid-2">
            <div className="card"><div className="inner">
              <h3>Sign up</h3>
              <form onSubmit={submit}>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" required style={{padding:'.6rem', width:'100%', marginBottom:'.6rem'}} />
                <input value={handle} onChange={e=>setHandle(e.target.value)} placeholder="Your handle (for referral)" required style={{padding:'.6rem', width:'100%', marginBottom:'.6rem'}} />
                <button className="btn btn-primary" type="submit">Submit</button>
              </form>
              {status && <p className="small" style={{marginTop:'.6rem'}}>{status}</p>}
            </div></div>
            <QRGenerator />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
