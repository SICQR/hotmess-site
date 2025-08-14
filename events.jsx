import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EventCards from '../components/EventCards'

export default function Events(){
  return (
    <>
      <Head><title>Events — HOTMESS</title></Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h2>Events</h2>
          <EventCards />
          <div className="card" style={{marginTop:'1rem'}}>
            <div className="inner">
              <h3>MAD BEAR WEEK — Torremolinos</h3>
              <p className="small">Three-phase drop: The Myth → The Ritual → The Reward. Scan-to-shop QR hunts, Radio tie-ins, and affiliate rewards on every tap.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
