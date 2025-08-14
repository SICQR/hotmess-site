import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About - HOTMESS LDN</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <NavBar/>
      <main>
        <section className="hero">
          <div className="h1">About <span>HOTMESS</span></div>
          <p className="hook">
            Always too much, never enough.
          </p>
        </section>

        <section className="section container">
          <div className="card">
            <h2>Our Story</h2>
            <p>HOTMESS LDN is more than just a brand—it's a lifestyle. We create masc, cheeky, luxuriously filthy products that let you express your authentic self.</p>
            
            <h3>What We Do</h3>
            <ul>
              <li><strong>Fashion:</strong> Clothes that flex with your lifestyle</li>
              <li><strong>Wellness:</strong> The only lube with real aftercare</li>
              <li><strong>Media:</strong> Radio that never sleeps</li>
            </ul>
            
            <p>From our radio streams to our exclusive drops, we're building a community where being too much is never enough.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}