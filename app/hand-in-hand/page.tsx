import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'

export const metadata = {
  title: 'Hand N Hand — Care & Aftercare',
  description: 'Harm reduction, consent, aftercare, and mental health resources for queer men.',
}

export default function HandInHandPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              HAND N<br/>
              <span className="text-accent">HAND</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Heavy Healthy Real. Care, aftercare, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#resources" className="btn btn-primary">
                Find Resources
              </a>
              <a href="#products" className="btn btn-secondary">
                Care Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="scroll-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Our Manifesto</h2>
            <div className="text-lg leading-relaxed space-y-6 opacity-90">
              <p>
                HOTMESS believes that pleasure and safety go hand in hand. 
                We're not just about looking good — we're about feeling good, 
                being safe, and taking care of each other.
              </p>
              <p>
                Hand N Hand isn't just a product line. It's a commitment to 
                real aftercare, honest conversations, and resources that actually help.
              </p>
              <p className="text-accent font-bold">
                The only lube with real aftercare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Resources</h2>
          <div className="grid md:grid-3 gap-8 mb-8">
            <div className="card animate-fade">
              <h4 className="mb-4 text-accent">🏥 SEXUAL HEALTH</h4>
              <ul className="text-sm space-y-3">
                <li><a href="https://www.56t.nhs.uk" className="hover:text-accent transition-colors">56T (Central London)</a></li>
                <li><a href="https://www.chelwest.nhs.uk/services/services-a-z/sexual-health" className="hover:text-accent transition-colors">Chelsea & Westminster</a></li>
                <li><a href="https://www.prepster.info" className="hover:text-accent transition-colors">PrEP information</a></li>
                <li><a href="https://www.terrence-higgins.org.uk" className="hover:text-accent transition-colors">Terrence Higgins Trust</a></li>
              </ul>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.1s' }}>
              <h4 className="mb-4 text-accent">🧠 MENTAL HEALTH</h4>
              <ul className="text-sm space-y-3">
                <li><a href="https://www.samaritans.org" className="hover:text-accent transition-colors">Samaritans: 116 123</a></li>
                <li><a href="https://www.mindout.org.uk" className="hover:text-accent transition-colors">MindOut (LGBTQ+)</a></li>
                <li><a href="https://www.tht.org.uk" className="hover:text-accent transition-colors">THT Direct: 0808 802 1221</a></li>
                <li><a href="https://www.switchboard.lgbt" className="hover:text-accent transition-colors">LGBT+ Switchboard</a></li>
              </ul>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.2s' }}>
              <h4 className="mb-4 text-accent">⚖️ HARM REDUCTION</h4>
              <ul className="text-sm space-y-3">
                <li><a href="https://www.release.org.uk" className="hover:text-accent transition-colors">Release (Drugs & Law)</a></li>
                <li><a href="https://www.talktofrankldn.co.uk" className="hover:text-axis text-accent transition-colors">Frank (Drug Info)</a></li>
                <li><a href="https://www.with-you.co.uk" className="hover:text-accent transition-colors">With You (Support)</a></li>
                <li><a href="https://www.changegrowlive.org" className="hover:text-accent transition-colors">Change Grow Live</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm opacity-75 mb-6">
              <strong>Emergency:</strong> Call 999 or go to A&E immediately.
              This page offers general resources and signposts. It is not medical advice.
            </p>
            <CrossCTA 
              primary={{ href: '#products', label: 'Care Products' }}
              secondary={{ href: '/rooms', label: 'Community Support' }}
            />
          </div>
        </div>
      </section>

      {/* Care Products */}
      <section id="products" className="scroll-section bg-accent/5">
        <div className="container">
          <h2 className="text-center mb-12">HNH MESS Products</h2>
          <div className="grid md:grid-2 gap-8 mb-8">
            <div className="card">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">HNH LUBE</span>
              </div>
              <h3 className="mb-2">HNH MESS Lube</h3>
              <p className="small mb-4">
                Water-based, long-lasting, and comes with aftercare guidance. 
                Because good sex includes good conversations.
              </p>
              <div className="text-lg font-bold text-accent mb-4">£18</div>
              <ul className="text-xs space-y-1 opacity-75">
                <li>• Includes aftercare guide insert</li>
                <li>• QR code links to digital resources</li>
                <li>• Portion of proceeds fund community programs</li>
                <li>• Condom-compatible, toy-friendly</li>
              </ul>
            </div>
            <div className="card">
              <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-500 rounded mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">CARE KIT</span>
              </div>
              <h3 className="mb-2">Aftercare Kit</h3>
              <p className="small mb-4">
                Everything you need for real aftercare. Curated by community, 
                designed for connection.
              </p>
              <div className="text-lg font-bold text-accent mb-4">£35</div>
              <ul className="text-xs space-y-1 opacity-75">
                <li>• HNH MESS Lube (50ml)</li>
                <li>• Comfort items selection</li>
                <li>• Digital aftercare resources</li>
                <li>• Community support access</li>
              </ul>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/shop', label: 'Shop Care Products' }}
            secondary={{ href: '/affiliate', label: 'Become Affiliate' }}
          />
        </div>
      </section>

      {/* Sunday Care */}
      <section className="scroll-section">
        <div className="container text-center">
          <h2 className="mb-6">Aftercare Sundays</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Every Sunday on HOTMESS Radio, we dedicate time to aftercare conversations. 
            Real talk about real experiences, with resources that actually help.
          </p>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="card text-left">
              <h4 className="mb-3">What We Cover</h4>
              <ul className="text-sm space-y-2">
                <li>• Check-ins and emotional processing</li>
                <li>• Resource sharing and community support</li>
                <li>• Guest speakers from sexual health orgs</li>
                <li>• Anonymous Q&A and advice</li>
                <li>• Soft music and calm energy</li>
              </ul>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/radio', label: 'Listen Live' }}
            secondary={{ href: '/rooms', label: 'Join Community' }}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}