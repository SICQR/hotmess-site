import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function Returns(){
  return (
    <>
      <Head><title>Returns & Refunds — HOTMESS</title></Head>
      <Navbar />
      <div className="container" style={{padding:'2rem 0'}}>
        <h2>Returns & Refunds</h2>
        <ul className="small">
          <li>Clothing: return within 30 days, unworn, with tags and proof of purchase.</li>
          <li>Lube/Personal care: return only if unopened and seal-intact.</li>
          <li>To start a return, contact support@hotmessldn.com with your order number.</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}
