import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function Terms(){
  return (
    <>
      <Head><title>Terms & Conditions — HOTMESS</title></Head>
      <Navbar />
      <div className="container" style={{padding:'2rem 0'}}>
        <h2>Terms & Conditions</h2>
        <ul className="small">
          <li>Products are sold by HOTMESS London. Prices include VAT where applicable.</li>
          <li>Affiliate rewards require a valid referral parameter at the time of purchase.</li>
          <li>Abuse, fraud, or harassment in our community spaces is not tolerated.</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}
