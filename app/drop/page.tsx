import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'
import dropsData from '../../src/data/drops.json'

export const metadata = {
  title: 'HOTMESS Drop — Latest Capsules',
  description: 'Legendary Board teasers and limited capsule collections.',
}

export default function DropPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              LATEST<br/>
              <span className="text-accent">DROPS</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Capsule collections and Legendary Board teasers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#current" className="btn btn-primary">
                Current Drop
              </a>
              <a href="#legendary" className="btn btn-secondary">
                Legendary Board
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Current Drop */}
      <section id="current" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Current Drop</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card bg-gradient-to-br from-accent/20 to-pink-500/20 p-8 mb-8">
              <div className="text-center">
                <div className="text-sm font-display uppercase tracking-wider opacity-75 mb-4">
                  DROP 024 • WINTER HEAT
                </div>
                <h3 className="text-3xl mb-6">FIRE ESCAPE COLLECTION</h3>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                  Limited pieces for when the club gets too hot but the night's just beginning. 
                  Emergency layers that look anything but basic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">12</div>
                    <div className="small">Pieces</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">72H</div>
                    <div className="small">Drop Window</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">£45-85</div>
                    <div className="small">Price Range</div>
                  </div>
                </div>
                <CrossCTA 
                  primary={{ href: '/shop', label: 'Shop Fire Escape' }}
                  secondary={{ href: '#upcoming', label: 'Next Drop' }}
                />
              </div>
            </div>
          </div>
          
          {/* Drop Items */}
          <div className="grid md:grid-4 gap-6">
            {dropsData.slice(0, 4).map((product, index) => (
              <a
                key={product.slug}
                href={`/product/${product.slug}`}
                className="card animate-fade"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-accent/10 rounded mb-3 flex items-center justify-center">
                  <span className="text-sm font-bold opacity-75">{product.title}</span>
                </div>
                <h4 className="font-bold mb-2">{product.title}</h4>
                <p className="text-xs opacity-75 mb-2">Limited drop exclusive</p>
                <div className="font-bold">£{product.price}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Drops */}
      <section id="upcoming" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Upcoming Drops</h2>
          
          <div className="grid md:grid-3 gap-8 mb-8">
            <div className="card animate-fade">
              <div className="text-sm font-display uppercase tracking-wider opacity-75 mb-3">
                DROP 025 • SPRING FEVER
              </div>
              <h4 className="mb-3">BLOOM COLLECTION</h4>
              <p className="small mb-4">
                Floral rebellion meets technical innovation. 
                12 pieces dropping March 15.
              </p>
              <div className="text-accent font-bold">Notify Me</div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-sm font-display uppercase tracking-wider opacity-75 mb-3">
                DROP 026 • PRIDE SPECIAL
              </div>
              <h4 className="mb-3">RAINBOW RIOT</h4>
              <p className="small mb-4">
                Annual Pride collection with community collaborations. 
                Limited quantities, maximum impact.
              </p>
              <div className="text-accent font-bold">Notify Me</div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-sm font-display uppercase tracking-wider opacity-75 mb-3">
                DROP 027 • SUMMER HEAT
              </div>
              <h4 className="mb-3">SWEAT EQUITY</h4>
              <p className="small mb-4">
                Gym-to-festival pieces designed for bodies in motion. 
                Performance meets pleasure.
              </p>
              <div className="text-accent font-bold">Notify Me</div>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '#legendary', label: 'Legendary Board' }}
            secondary={{ href: '/affiliate', label: 'Early Access' }}
          />
        </div>
      </section>

      {/* Legendary Board Teaser */}
      <section id="legendary" className="scroll-section bg-accent/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">LEGENDARY BOARD</h2>
            
            <div className="card bg-black/60 p-12 mb-8">
              <div className="text-6xl mb-6">👑</div>
              <h3 className="text-2xl mb-6">COMING SOON</h3>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                The ultimate collector's paradise. One-of-one pieces, 
                celebrity collaborations, and items that will never be reproduced.
              </p>
              
              <div className="grid md:grid-3 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">1/1</div>
                  <div className="small">Unique Pieces</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">72H</div>
                  <div className="small">Auction Windows</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-2">∞</div>
                  <div className="small">Bragging Rights</div>
                </div>
              </div>
              
              <p className="small opacity-75 mb-8">
                Access requires invitation or affiliate status. 
                Not just clothing — cultural artifacts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-primary" disabled>
                  Request Invitation
                </button>
                <a href="/affiliate" className="btn btn-secondary">
                  Become Affiliate
                </a>
              </div>
            </div>
            
            <div className="grid md:grid-2 gap-8">
              <div className="text-left">
                <h4 className="mb-4">What Makes It Legendary?</h4>
                <ul className="text-sm space-y-2">
                  <li>• One-of-one pieces designed by emerging artists</li>
                  <li>• Celebrity worn items from events and photoshoots</li>
                  <li>• Prototype pieces that never went to production</li>
                  <li>• Collaboration pieces with limited quantities (≤5)</li>
                  <li>• Vintage HOTMESS pieces from early collections</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="mb-4">Access Requirements</h4>
                <ul className="text-sm space-y-2">
                  <li>• Affiliate status (automatic access)</li>
                  <li>• VIP customer status (£1000+ lifetime spend)</li>
                  <li>• Community contributor (Rooms moderator)</li>
                  <li>• Artist/influencer collaboration invitation</li>
                  <li>• Random lottery from mailing list</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Strategy */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Drop Strategy</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-2 gap-8">
              <div className="card">
                <h4 className="mb-4">Capsule Collections</h4>
                <p className="small mb-6">
                  Themed drops of 8-15 pieces with tight creative direction. 
                  Limited quantities create urgency and exclusivity.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• 72-hour availability windows</li>
                  <li>• No restocks, ever</li>
                  <li>• Size runs based on pre-order demand</li>
                  <li>• Each piece numbered for authenticity</li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="mb-4">Community First</h4>
                <p className="small mb-6">
                  Affiliates and VIP customers get 24-hour early access. 
                  Community engagement drives priority access.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Affiliate early access (24h)</li>
                  <li>• VIP customer preview (12h)</li>
                  <li>• Mailing list notification (6h before)</li>
                  <li>• Social media announcement (public)</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <CrossCTA 
                primary={{ href: '/affiliate', label: 'Get Early Access' }}
                secondary={{ href: '/shop', label: 'Shop Current Stock' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}