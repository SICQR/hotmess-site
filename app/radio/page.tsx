import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { RadioPlayer } from '../../components/RadioPlayer'
import { ScheduleGrid } from '../../components/ScheduleGrid'
import { CrossCTA } from '../../components/CrossCTA'
import { RadioShow } from '../../src/types/radio'
import radioShowsData from '../../src/data/radio.json'

export const metadata = {
  title: 'HOTMESS Radio — Live 24/7',
  description: 'Always live, always unapologetic. HOTMESS Radio from London.',
}

export default function RadioPage() {
  // Type assertion to ensure the data matches our interface
  const radioShows = radioShowsData as RadioShow[]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              HOTMESS<br/>
              <span className="text-accent">RADIO</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Always live, always unapologetic.
            </p>
            <RadioPlayer />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Weekly Schedule</h2>
          <ScheduleGrid shows={radioShows} />
          <div className="mt-12">
            <CrossCTA 
              primary={{ href: '/rooms', label: 'Join Community' }}
              secondary={{ href: '/affiliate', label: 'Become Affiliate' }}
            />
          </div>
        </div>
      </section>

      {/* Show Cards */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Show Formats</h2>
          <div className="grid grid-3 gap-8 mb-8">
            <div className="card text-center animate-fade">
              <h4 className="mb-3">RESIDENCY</h4>
              <p className="small">Regular weekly slots with consistent DJs building their sound</p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
              <h4 className="mb-3">PROVOCATEUR</h4>
              <p className="small">Talk meets music. Conversations that matter with soundtracks that slap</p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.2s' }}>
              <h4 className="mb-3">MIX</h4>
              <p className="small">Guest sets, one-offs, and special events from friends of the family</p>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/hand-in-hand', label: 'Aftercare Sundays' }}
            secondary={{ href: '/shop', label: 'Shop Merch' }}
          />
        </div>
      </section>

      {/* Audio Identity */}
      <section className="scroll-section bg-accent/10">
        <div className="container text-center">
          <h2 className="mb-6">Audio Identity</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Every stinger, every ID, every transition follows the HOTMESS cadence. 
            From 6-second IDs to full show intros, our audio DNA is unmistakable.
          </p>
          <div className="grid grid-2 gap-6 mb-8">
            <div className="text-left">
              <h4 className="mb-3">Daypart Tinting</h4>
              <p className="small">AM warm, PM soft, Night neon. The station mood shifts with London.</p>
            </div>
            <div className="text-left">
              <h4 className="mb-3">Brand Voice</h4>
              <p className="small">SCAN, GAG, REPEAT. HUNG? SCAN HERE. Copy that lands like lyrics.</p>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '/drop', label: 'Latest Drops' }}
            secondary={{ href: '/label', label: 'RAW CONVICT' }}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}