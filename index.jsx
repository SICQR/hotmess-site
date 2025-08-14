import Head from 'next/head'
import '../lib/attribution'
import { useEffect } from 'react'
import { captureAttribution } from '../lib/attribution'
import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'
import Pixels from '../components/Pixels'
import CookieConsent from '../components/CookieConsent'
import Link from 'next/link'

export default function Home(){
  useEffect(()=>{ captureAttribution() },[])
  return (
    <>
      <Head>
        <title>HOTMESS London — Always Too Much, Never Enough</title>
        <meta name="description" content="Queer fashion, radio, and aftercare. HOTMESS London." />
        <meta property="og:title" content="HOTMESS London" />
        <meta property="og:description" content="Queer fashion, radio, and aftercare." />
      </Head>
      <Pixels />
      <Navbar />
      <HeroBanner />
      <section className="section">
        <div className="container">
          <h2>Latest Drops</h2>
          <div className="grid grid-3">
            <a className="card" href="/shop">
              <img src="/images/superhung-vest.svg" alt="SUPERHUNG Vest" />
              <div className="inner">
                <h3>SUPERHUNG Vest</h3>
                <p className="small">Gym-to-rave flex. Limited.</p>
              </div>
            </a>
            <a className="card" href="/shop">
              <img src="/images/hnh-lube.svg" alt="HNH MESS Lube" />
              <div className="inner">
                <h3>HNH MESS Lube</h3>
                <p className="small">The only lube with real aftercare.</p>
              </div>
            </a>
            <a className="card" href="/events">
              <img src="/images/radio-banner.svg" alt="HOTMESS Radio" />
              <div className="inner">
                <h3>HOTMESS Radio Weekender</h3>
                <p className="small">Live DJs. Stingers. Aftercare Sundays.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section className="section" style={{background:'#0a0a0a'}}>
        <div className="container">
          <h2>Collections</h2>
          <div className="grid grid-3">
            <div className="card"><div className="inner"><h3>RAW</h3><p className="small">Leather‑lux grit.</p></div></div>
            <div className="card"><div className="inner"><h3>HUNG</h3><p className="small">Body‑con gym‑to‑rave.</p></div></div>
            <div className="card"><div className="inner"><h3>HIGH</h3><p className="small">Varsity‑coded euphoria.</p></div></div>
          </div>
        </div>
      </section>
      <section className="section" style={{background:'#0a0a0a'}}>
        <div className="container">
          <h2>Listen Live</h2>
          <p className="small">24/7 HOTMESS Radio, on-brand and unapologetic.</p>
          <a className="btn btn-secondary" href="/radio">Go to Radio</a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2>Care</h2>
          <p className="small">Hand N Hand: the only lube with real aftercare.</p>
          <a className="btn btn-secondary" href="/care">Care & Support</a>
        </div>
      </section>
      <Footer />
      <CookieConsent />
    </>
  )
}
