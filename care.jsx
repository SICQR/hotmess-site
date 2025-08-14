import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareBlocks from '../components/CareBlocks'

export default function Care(){
  return (
    <>
      <Head>
        <title>Care — Heavy Healthy Real</title>
        <meta name="description" content="Hand N Hand: harm‑reduction, consent, aftercare, and mental health resources for queer men." />
      </Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h2>Care & Aftercare</h2>
          <p className="small">This page offers general resources and signposts. It is not medical advice. In an emergency, contact local services immediately.</p>
          <CareBlocks />
        </div>
      </section>
      <Footer />
    </>
  )
}
