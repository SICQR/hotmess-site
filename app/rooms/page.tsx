import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'

export const metadata = {
  title: 'HOTMESS Rooms — Community',
  description: 'House rules, Telegram deep links, and community guidelines.',
}

export default function RoomsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              COMMUNITY<br/>
              <span className="text-accent">ROOMS</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              House rules, deep conversations, and the family you choose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#join" className="btn btn-primary">
                Join Rooms
              </a>
              <a href="#rules" className="btn btn-secondary">
                House Rules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">The Family</h2>
          
          <div className="grid md:grid-3 gap-8 mb-8">
            <div className="card text-center animate-fade">
              <div className="text-4xl mb-4">🎧</div>
              <h4 className="mb-3">RADIO ROOM</h4>
              <p className="small">
                Live chat during shows, track requests, DJ feedback, 
                and real-time reactions to what's playing.
              </p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">👕</div>
              <h4 className="mb-3">STYLE ROOM</h4>
              <p className="small">
                Fit checks, styling advice, size recommendations, 
                and honest opinions from people who get it.
              </p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl mb-4">💬</div>
              <h4 className="mb-3">GENERAL CHAT</h4>
              <p className="small">
                Daily conversations, memes, life updates, 
                and the random thoughts that bind us together.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-2 gap-8 mb-8">
            <div className="card text-center animate-fade">
              <div className="text-4xl mb-4">🔞</div>
              <h4 className="mb-3">AFTER DARK</h4>
              <p className="small">
                18+ space for honest conversations about sex, relationships, 
                and the parts of life that need real talk.
              </p>
            </div>
            <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl mb-4">🏪</div>
              <h4 className="mb-3">MARKETPLACE</h4>
              <p className="small">
                Buy, sell, trade HOTMESS pieces. Verified community members only. 
                No fakes, no drama, just fair trades.
              </p>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '#join', label: 'Join Community' }}
            secondary={{ href: '#rules', label: 'Read Rules' }}
          />
        </div>
      </section>

      {/* Join Process */}
      <section id="join" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">How to Join</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-3 gap-8 mb-8">
              <div className="card text-center animate-fade">
                <div className="text-3xl font-bold text-accent mb-4">1</div>
                <h4 className="mb-3">VERIFY</h4>
                <p className="small">
                  Download Telegram and verify your account. 
                  We only accept verified users for safety.
                </p>
              </div>
              <div className="card text-center animate-fade" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-accent mb-4">2</div>
                <h4 className="mb-3">APPLY</h4>
                <p className="small">
                  Answer a few questions about why you want to join. 
                  We're looking for genuine community members.
                </p>
              </div>
              <div className="card text-center animate-fade" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-accent mb-4">3</div>
                <h4 className="mb-3">CONNECT</h4>
                <p className="small">
                  Get approved and receive invite links. 
                  Start with general chat, earn access to other rooms.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="card bg-accent/10 p-8 mb-8">
                <h4 className="mb-4">Ready to Join?</h4>
                <p className="small mb-6">
                  Click below to start your application. Make sure you have Telegram installed 
                  and a verified phone number.
                </p>
                <a 
                  href={`https://t.me/${process.env.TELEGRAM_BOT_USERNAME || 'hotmess_bot'}?start=apply`}
                  className="btn btn-primary"
                >
                  Apply via Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* House Rules */}
      <section id="rules" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">House Rules</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 mb-8">
              <h3 className="mb-6 text-accent">Core Principles</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="mb-3">🔒 Safety First</h4>
                  <p className="small">
                    No doxxing, no harassment, no sharing personal info without consent. 
                    Block and report problem users immediately.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-3">🤝 Consent Always</h4>
                  <p className="small">
                    Ask before DMing, sharing photos, or crossing into personal territory. 
                    "No" means no, immediately and without question.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-3">👁️ Content Warnings</h4>
                  <p className="small">
                    Use spoiler tags for potentially triggering content. 
                    CW for: mental health, drugs, sexual content, violence.
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-3">🚫 Zero Tolerance</h4>
                  <p className="small">
                    Racism, transphobia, homophobia, or any form of bigotry 
                    results in immediate permanent ban. No warnings.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-2 gap-8 mb-8">
              <div className="card">
                <h4 className="mb-4">What's Welcome</h4>
                <ul className="text-sm space-y-2">
                  <li>• Honest conversations about real life</li>
                  <li>• Respectful disagreement and debate</li>
                  <li>• Sharing wins, struggles, and support</li>
                  <li>• Memes, jokes, and lighter moments</li>
                  <li>• Event organization and meetups</li>
                  <li>• Fashion/style advice and feedback</li>
                  <li>• Music recommendations and discussions</li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="mb-4">What's Not</h4>
                <ul className="text-sm space-y-2">
                  <li>• Spam, excessive self-promotion</li>
                  <li>• Drama from other platforms/communities</li>
                  <li>• Unsolicited photos (especially intimate)</li>
                  <li>• Drug dealing or illegal activity</li>
                  <li>• Hate speech or targeted harassment</li>
                  <li>• Sharing private conversations publicly</li>
                  <li>• Commercial activity without mod approval</li>
                </ul>
              </div>
            </div>
            
            <div className="card bg-yellow-500/10 p-6">
              <h4 className="mb-3">Age Verification Required</h4>
              <p className="small">
                After Dark room requires age verification. Send photo ID to mods 
                for verification. IDs are deleted immediately after confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Moderation */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Community Moderation</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-2 gap-8 mb-8">
              <div className="card">
                <h4 className="mb-4">How We Moderate</h4>
                <p className="small mb-4">
                  Community-driven moderation with clear escalation paths. 
                  Mods are volunteers from the community, not HOTMESS employees.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• Warning system for minor infractions</li>
                  <li>• Temporary bans for repeated issues</li>
                  <li>• Permanent bans for serious violations</li>
                  <li>• Appeal process via direct mod contact</li>
                </ul>
              </div>
              
              <div className="card">
                <h4 className="mb-4">Reporting Issues</h4>
                <p className="small mb-4">
                  Multiple ways to report problems, from minor issues 
                  to serious safety concerns.
                </p>
                <ul className="text-sm space-y-2">
                  <li>• React with 🚨 for immediate mod attention</li>
                  <li>• DM any mod for private reporting</li>
                  <li>• Use @admin tag for urgent issues</li>
                  <li>• Anonymous reporting via community bot</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <CrossCTA 
                primary={{ href: '#join', label: 'Join the Community' }}
                secondary={{ href: '/hand-in-hand', label: 'Care Resources' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events & Meetups */}
      <section className="scroll-section bg-accent/5">
        <div className="container text-center">
          <h2 className="mb-8">Events & Meetups</h2>
          
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Regular community events both online and in London. 
            From listening parties to popup shops to late-night conversations.
          </p>
          
          <div className="grid md:grid-3 gap-8 mb-8">
            <div className="card">
              <h4 className="mb-3">LISTENING PARTIES</h4>
              <p className="small">
                Monthly events where we listen to new releases together, 
                share reactions, and discover new music as a community.
              </p>
            </div>
            <div className="card">
              <h4 className="mb-3">POPUP SHOPS</h4>
              <p className="small">
                Exclusive shopping events for community members. 
                Early access to drops, special discounts, and community-only pieces.
              </p>
            </div>
            <div className="card">
              <h4 className="mb-3">CARE CIRCLES</h4>
              <p className="small">
                Monthly check-ins focused on mental health, aftercare, 
                and supporting each other through difficult times.
              </p>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '#join', label: 'Join to Get Event Access' }}
            secondary={{ href: '/radio', label: 'Listen to Shows' }}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}