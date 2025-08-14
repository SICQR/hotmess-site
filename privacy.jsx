import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function Privacy(){
  return (
    <>
      <Head><title>Privacy Policy — HOTMESS</title></Head>
      <Navbar />
      <div className="container" style={{padding:'2rem 0'}}>
        <h2>Privacy Policy</h2>
        <p className="small">We use cookies and pixels only after you consent. We process limited data for checkout, attribution, and support. You can request access or deletion at any time at privacy@hotmessldn.com.</p>
        <p className="small">This site may store UTM, affiliate, and QR parameters in your browser to fulfill rewards. Analytics load only after consent.</p>
      </div>
      <Footer />
    </>
  )
}
