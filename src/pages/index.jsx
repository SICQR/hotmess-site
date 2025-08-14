import NavBar from '@/components/NavBar'
import RadioPlayer from '@/components/RadioPlayer'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'

export default function Home(){
  return (
    <>
      <NavBar/>
      <main>
        <section className="hero">
          <div className="h1">Welcome to <span>HOTMESS</span> London</div>
          <p className="hook">
            Masc, cheeky, luxuriously filthy. Clothes that flex. Lube with aftercare. Radio that never sleeps.
          </p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <a className="btn hot" href="#shop">Shop the Drop</a>
            <a className="btn" href="#radio">Listen Live</a>
          </div>
        </section>

        <section id="radio" className="section container">
          <h2 style={{textTransform:'uppercase'}}>Radio</h2>
          <RadioPlayer/>
        </section>

        <section id="shop" className="section container">
          <h2 style={{textTransform:'uppercase'}}>New & Nasty (Shopify)</h2>
          <ProductGrid/>
        </section>

        <section id="drops" className="section container">
          <h2 style={{textTransform:'uppercase'}}>SUPERHUNG / SUPERHIGH</h2>
          <div className="card">
            Limited drops. Status only. Scan the bottle, climb the leaderboard, cry on Sundays.
          </div>
        </section>

        <section id="care" className="section container">
          <h2 style={{textTransform:'uppercase'}}>HNH MESS — Hand N Hand</h2>
          <div className="card">
            The only lube with real aftercare. QR → Radio → Support. Always too much, never enough.
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}