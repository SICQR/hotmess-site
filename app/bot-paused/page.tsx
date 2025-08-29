import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'

export const metadata = {
  title: 'Bot Status — HOTMESS London',
  description: 'Bot service temporarily paused. Check back soon.',
}

export default function BotPausedPage() {
  return (
    <>
      <Header />
      
      {/* Status Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade max-w-2xl mx-auto">
            <div className="text-6xl mb-6">⏸️</div>
            <h1 className="mb-6">
              BOT<br/>
              <span className="text-accent">PAUSED</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Our bot service is temporarily paused for maintenance and improvements.
            </p>
            
            <div className="card bg-black/40 p-8 mb-8">
              <h3 className="font-display font-bold mb-4">What's happening?</h3>
              <div className="text-left space-y-3">
                <p className="text-sm">
                  🔧 System upgrades and optimization in progress
                </p>
                <p className="text-sm">
                  🛡️ Enhanced security measures being implemented
                </p>
                <p className="text-sm">
                  ✨ New features being added to improve your experience
                </p>
                <p className="text-sm">
                  📡 Better integration with Telegram deep links
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-sm opacity-75">
                Expected maintenance window: 2-4 hours
              </p>
              <p className="text-sm opacity-75">
                Follow <a href="/radio" className="text-accent hover:underline">HOTMESS Radio</a> for live updates
              </p>
            </div>

            <CrossCTA 
              primary={{ href: '/radio', label: 'Listen Live' }}
              secondary={{ href: '/affiliate', label: 'Join Community' }}
            />
          </div>
        </div>
      </section>

      {/* Alternative Actions */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">While You Wait</h2>
          
          <div className="grid md:grid-3 gap-6 mb-8">
            <div className="card text-center animate-fade">
              <div className="text-3xl mb-4">📻</div>
              <h4 className="mb-3">Live Radio</h4>
              <p className="small mb-4">
                Tune into HOTMESS Radio for non-stop music and community vibes.
              </p>
              <a href="/radio" className="text-accent font-bold">Listen Now</a>
            </div>
            
            <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl mb-4">🛍️</div>
              <h4 className="mb-3">Latest Drops</h4>
              <p className="small mb-4">
                Check out our newest capsule collections and limited releases.
              </p>
              <a href="/drop" className="text-accent font-bold">Shop Now</a>
            </div>
            
            <div className="card text-center animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="mb-3">Affiliate Program</h4>
              <p className="small mb-4">
                Join our affiliate program for early access and exclusive perks.
              </p>
              <a href="/affiliate" className="text-accent font-bold">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}