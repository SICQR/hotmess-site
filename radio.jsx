import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RadioPlayer from '../components/RadioPlayer'
import NowPlaying from '../components/NowPlaying'

export default function Radio(){
  return (
    <>
      <Head><title>HOTMESS Radio — Listen Live</title></Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h2>HOTMESS Radio</h2>
          <RadioPlayer />
          <NowPlaying />
        </div>
      </section>
      <Footer />
    </>
  )
}
