import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - HOTMESS LDN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <NavBar/>
      <main>
        <section className="hero">
          <div className="h1">Get in <span>Touch</span></div>
          <p className="hook">
            Ready to make a mess? We're listening.
          </p>
        </section>

        <section className="section container" id="contact">
          <div className="card">
            <h2>Contact Information</h2>
            <div style={{display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap'}}>
              <div>
                <strong>HOTMESS LDN</strong><br/>
                Always too much, never enough.<br/><br/>
                
                <strong>Business Inquiries:</strong><br/>
                hello@hotmessldn.com<br/><br/>
                
                <strong>Radio & Media:</strong><br/>
                radio@hotmessldn.com<br/><br/>
                
                <strong>Support:</strong><br/>
                support@hotmessldn.com
              </div>
              
              <div>
                <strong>Follow the Mess</strong><br/>
                @hotmessldn everywhere<br/><br/>
                
                <strong>Radio Stream:</strong><br/>
                24/7 chaos, curated daily<br/><br/>
                
                <strong>Shop Hours:</strong><br/>
                When the mood strikes
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}