import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'

export const metadata = {
  title: 'RAW CONVICT RECORDS — HOTMESS Label',
  description: 'Underground sounds from London. RAW CONVICT RECORDS label page.',
}

export default function LabelPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              RAW CONVICT<br/>
              <span className="text-accent">RECORDS</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Underground sounds from London. No compromise, no filter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#releases" className="btn btn-primary">
                Latest Releases
              </a>
              <a href="#artists" className="btn btn-secondary">
                Our Artists
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Label Philosophy */}
      <section className="scroll-section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-8">Label Philosophy</h2>
            <div className="text-lg leading-relaxed space-y-6 opacity-90">
              <p>
                RAW CONVICT RECORDS exists to amplify voices that don't fit 
                into neat categories. We're not chasing charts or algorithms — 
                we're chasing truth.
              </p>
              <p>
                Every release tells a story of resilience, rebellion, or raw emotion. 
                From bedroom producers to established underground artists, 
                we focus on authenticity over artifice.
              </p>
              <p className="text-accent font-bold">
                Music that moves bodies and minds, not just markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section id="releases" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Latest Releases</h2>
          
          <div className="grid md:grid-2 gap-8 mb-8">
            {/* Featured Release */}
            <div className="card animate-fade">
              <div className="aspect-square bg-gradient-to-br from-red-500 to-black rounded mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg">RCR001</span>
              </div>
              <div className="text-sm font-display uppercase tracking-wider opacity-75 mb-2">
                FEATURED RELEASE
              </div>
              <h3 className="mb-2">NEON SWEAT EP</h3>
              <div className="text-accent font-bold mb-3">JADE VOLT</div>
              <p className="small mb-4">
                Four tracks of raw club energy. Recorded live in East London warehouses, 
                mixed in bedrooms, mastered for maximum impact.
              </p>
              <div className="flex gap-3 text-sm">
                <a href="#" className="btn btn-primary btn-sm">Stream</a>
                <a href="#" className="btn btn-secondary btn-sm">Download</a>
              </div>
            </div>
            
            {/* Recent Releases Grid */}
            <div className="space-y-4">
              <div className="card animate-fade" style={{ animationDelay: '0.1s' }}>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">RCR002</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">AFTERHOURS ANTHEM</h4>
                    <div className="text-accent text-sm font-bold mb-2">STORM KING</div>
                    <p className="text-xs opacity-75">When the club closes but the night continues</p>
                  </div>
                </div>
              </div>
              
              <div className="card animate-fade" style={{ animationDelay: '0.2s' }}>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">RCR003</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">UNDERGROUND KINGS</h4>
                    <div className="text-accent text-sm font-bold mb-2">VARIOUS ARTISTS</div>
                    <p className="text-xs opacity-75">Compilation featuring 8 underground legends</p>
                  </div>
                </div>
              </div>
              
              <div className="card animate-fade" style={{ animationDelay: '0.3s' }}>
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-gray-800 rounded flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">RCR004</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">BASS THERAPY</h4>
                    <div className="text-accent text-sm font-bold mb-2">DEEP CLINIC</div>
                    <p className="text-xs opacity-75">Healing frequencies for broken hearts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '#artists', label: 'Meet Our Artists' }}
            secondary={{ href: '/radio', label: 'Hear on Radio' }}
          />
        </div>
      </section>

      {/* Artists Roster */}
      <section id="artists" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Our Artists</h2>
          
          <div className="grid md:grid-3 gap-8 mb-8">
            <div className="card text-center animate-fade">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">JV</span>
              </div>
              <h4 className="mb-2">JADE VOLT</h4>
              <p className="small mb-4">
                Warehouse techno with emotional depth. 
                East London's most promising underground talent.
              </p>
              <div className="text-xs opacity-75">3 releases • 50k+ streams</div>
            </div>
            
            <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">SK</span>
              </div>
              <h4 className="mb-2">STORM KING</h4>
              <p className="small mb-4">
                Afterhours anthems and 6AM emotions. 
                Soundtracks for when reality gets too heavy.
              </p>
              <div className="text-xs opacity-75">2 releases • 30k+ streams</div>
            </div>
            
            <div className="card text-center animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold">DC</span>
              </div>
              <h4 className="mb-2">DEEP CLINIC</h4>
              <p className="small mb-4">
                Therapeutic bass and healing frequencies. 
                Music as medicine for modern alienation.
              </p>
              <div className="text-xs opacity-75">1 release • 15k+ streams</div>
            </div>
          </div>
          
          <div className="text-center">
            <CrossCTA 
              primary={{ href: '#demos', label: 'Submit Demo' }}
              secondary={{ href: '/radio', label: 'Artist Interviews' }}
            />
          </div>
        </div>
      </section>

      {/* Label Services */}
      <section className="scroll-section bg-accent/5">
        <div className="container">
          <h2 className="text-center mb-12">What We Offer</h2>
          
          <div className="grid md:grid-2 gap-8 mb-8">
            <div className="card">
              <h4 className="mb-4">For Artists</h4>
              <ul className="text-sm space-y-3">
                <li>• Professional mixing and mastering</li>
                <li>• Distribution to all major platforms</li>
                <li>• Promotional support and playlist placements</li>
                <li>• Radio play on HOTMESS Radio</li>
                <li>• Merchandise and physical release options</li>
                <li>• Sync opportunities for film/TV</li>
                <li>• Artist development and career guidance</li>
              </ul>
            </div>
            
            <div className="card">
              <h4 className="mb-4">Creative Support</h4>
              <ul className="text-sm space-y-3">
                <li>• Studio time at partner facilities</li>
                <li>• Collaboration opportunities with roster artists</li>
                <li>• Music video production support</li>
                <li>• Artwork and visual identity development</li>
                <li>• Live performance opportunities</li>
                <li>• Cross-promotion with HOTMESS events</li>
                <li>• Mental health and aftercare resources</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="small mb-8 max-w-2xl mx-auto">
              We believe in long-term artist development, not quick cash grabs. 
              Fair splits, transparent accounting, and genuine support for your creative vision.
            </p>
            <CrossCTA 
              primary={{ href: '#demos', label: 'Submit Your Music' }}
              secondary={{ href: '/hand-in-hand', label: 'Artist Resources' }}
            />
          </div>
        </div>
      </section>

      {/* Demo Submission */}
      <section id="demos" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Demo Submission</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 mb-8">
              <h3 className="mb-6">Submission Guidelines</h3>
              
              <div className="grid md:grid-2 gap-8">
                <div>
                  <h4 className="mb-4">What We're Looking For</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Authentic voice and unique perspective</li>
                    <li>• High-quality production (doesn't need to be expensive)</li>
                    <li>• Music that moves people emotionally and physically</li>
                    <li>• Artists committed to their craft and community</li>
                    <li>• Willingness to collaborate and grow</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="mb-4">How to Submit</h4>
                  <ul className="text-sm space-y-2">
                    <li>• Email: demos@rawconvictrecords.com</li>
                    <li>• Subject: "Demo Submission - [Your Artist Name]"</li>
                    <li>• Include 2-3 of your best tracks (MP3/WAV)</li>
                    <li>• Brief artist bio and musical influences</li>
                    <li>• Links to social media and previous releases</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-500/10 rounded">
                <h4 className="mb-3">Important Notes</h4>
                <ul className="text-sm space-y-2">
                  <li>• We listen to every submission personally</li>
                  <li>• Response time: 2-4 weeks</li>
                  <li>• No pay-to-play or submission fees</li>
                  <li>• Constructive feedback provided when possible</li>
                  <li>• Multiple submissions welcome (space them out)</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <CrossCTA 
                primary={{ href: 'mailto:demos@rawconvictrecords.com', label: 'Submit Demo' }}
                secondary={{ href: '/radio', label: 'Hear Current Roster' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="scroll-section">
        <div className="container text-center">
          <h2 className="mb-8">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-lg mb-8">
              Questions about releases, licensing, or collaboration opportunities? 
              We're always open to genuine connections and creative partnerships.
            </p>
            
            <div className="card bg-black/20 p-8">
              <div className="space-y-4">
                <div>
                  <strong>General Inquiries:</strong><br/>
                  <a href="mailto:info@rawconvictrecords.com" className="text-accent">
                    info@rawconvictrecords.com
                  </a>
                </div>
                <div>
                  <strong>Demo Submissions:</strong><br/>
                  <a href="mailto:demos@rawconvictrecords.com" className="text-accent">
                    demos@rawconvictrecords.com
                  </a>
                </div>
                <div>
                  <strong>Sync/Licensing:</strong><br/>
                  <a href="mailto:sync@rawconvictrecords.com" className="text-accent">
                    sync@rawconvictrecords.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}