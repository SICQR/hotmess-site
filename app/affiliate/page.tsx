import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'
import { QRCodeGenerator } from '../../components/QRCodeGenerator'

export const metadata = {
  title: 'HOTMESS Affiliate — Earn with Us',
  description: 'Generate personal QR codes, track performance, get paid. Join the HOTMESS affiliate program.',
}

export default function AffiliatePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              AFFILIATE<br/>
              <span className="text-accent">PROGRAM</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Generate personal QR codes, track performance, get paid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#generator" className="btn btn-primary">
                Generate QR Code
              </a>
              <a href="#dashboard" className="btn btn-secondary">
                View Dashboard
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">How It Works</h2>
          <div className="grid grid-3 gap-8 mb-8">
            <div className="card text-center animate-fade">
              <div className="text-4xl mb-4">1</div>
              <h4 className="mb-3">GENERATE</h4>
              <p className="small">
                Choose your target (radio, shop, rooms, etc.) and generate 
                a personal QR code with automatic UTM tracking.
              </p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">2</div>
              <h4 className="mb-3">SHARE</h4>
              <p className="small">
                Share your QR codes on social, print them, put them anywhere. 
                Every scan gets tracked back to you.
              </p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">3</div>
              <h4 className="mb-3">EARN</h4>
              <p className="small">
                Get paid weekly based on scans, sessions, conversions, and AOV. 
                Real-time tracking, transparent payouts.
              </p>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '#generator', label: 'Start Generating' }}
            secondary={{ href: '/rooms', label: 'Join Community' }}
          />
        </div>
      </section>

      {/* QR Generator */}
      <section id="generator" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Personal QR Generator</h2>
          <QRCodeGenerator />
        </div>
      </section>

      {/* Attribution Modes */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Attribution Models</h2>
          <div className="grid grid-3 gap-8 mb-8">
            <div className="card animate-fade">
              <h4 className="mb-3">FIRST TOUCH</h4>
              <p className="small mb-4">Credit goes to the first affiliate who brought the customer</p>
              <div className="text-xs opacity-75">Best for brand awareness campaigns</div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.1s' }}>
              <h4 className="mb-3">LAST TOUCH</h4>
              <p className="small mb-4">Credit goes to the last affiliate before conversion</p>
              <div className="text-xs opacity-75">Best for direct response campaigns</div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.2s' }}>
              <h4 className="mb-3">TIME DECAY (7D)</h4>
              <p className="small mb-4">Recent touches get more credit, older ones fade</p>
              <div className="text-xs opacity-75">Best for balanced attribution</div>
            </div>
          </div>
          <p className="text-center text-sm opacity-85">
            We track all models but pay based on the active mode set by admin.
          </p>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="scroll-section bg-accent/10">
        <div className="container">
          <h2 className="text-center mb-12">Commission Structure</h2>
          <div className="grid grid-2 gap-8 mb-8">
            <div className="card">
              <h4 className="mb-4">TIER 1: SCANNER</h4>
              <div className="text-2xl font-bold text-accent mb-4">5%</div>
              <ul className="text-sm space-y-2">
                <li>• 5% commission on referred sales</li>
                <li>• Weekly payouts via bank transfer</li>
                <li>• Real-time dashboard access</li>
                <li>• Basic QR code generation</li>
              </ul>
            </div>
            <div className="card">
              <h4 className="mb-4">TIER 2: PROVOCATEUR</h4>
              <div className="text-2xl font-bold text-accent mb-4">8%</div>
              <ul className="text-sm space-y-2">
                <li>• 8% commission on referred sales</li>
                <li>• Bonus payouts for milestones</li>
                <li>• Advanced analytics access</li>
                <li>• Custom QR designs</li>
                <li>• Priority support channel</li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <p className="small mb-6">
              Upgrade to Provocateur after £1000 in referred sales or 500+ scans in 30 days
            </p>
            <CrossCTA 
              primary={{ href: '#generator', label: 'Generate Your First QR' }}
              secondary={{ href: '/hand-in-hand', label: 'Learn More' }}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="dashboard" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Dashboard Preview</h2>
          <div className="card bg-black/20 p-8">
            <div className="grid grid-2 md:grid-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">1,247</div>
                <div className="small">Total Scans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">£342</div>
                <div className="small">Earned This Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">2.4%</div>
                <div className="small">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">£28</div>
                <div className="small">Average Order Value</div>
              </div>
            </div>
            <p className="text-center small opacity-75">
              Real-time tracking with 7-day and 30-day trend analysis
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}