import { CrossCTA } from '../../components/CrossCTA'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">About HOTMESS</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Always Too Much, Never Enough
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="scroll-section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg">
              <p>
                HOTMESS London emerged from the underground queer scene with one mission: 
                to create fashion that celebrates authenticity, community, and unapologetic self-expression.
              </p>
              <p>
                We're more than a brand—we're a platform where fashion meets technology, 
                radio meets community, and aftercare meets commerce. Our collections span 
                from leather-lux grit to gym-to-rave pieces, all designed for bodies and 
                identities that refuse to be contained.
              </p>
              <p>
                Through our 24/7 radio station, AR unlock experiences, and community events, 
                we're building a digital-physical ecosystem that puts queer joy, care, and 
                creativity at the center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">Our Values</h2>
          <div className="grid grid-3 mb-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🏳️‍🌈</div>
              <h3 className="mb-3">Queer First</h3>
              <p className="small">Everything we create centers queer experiences and celebrates our community</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🤗</div>
              <h3 className="mb-3">Aftercare Always</h3>
              <p className="small">From our products to our community, care and support are built into everything</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="mb-3">Innovation</h3>
              <p className="small">Pushing boundaries with AR, radio, and technology that serves our community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">The Team</h2>
          <div className="grid grid-2 mb-8">
            <div className="card">
              <h3 className="mb-2">Creative Direction</h3>
              <p className="small mb-3">Leading design, brand vision, and community engagement</p>
              <p className="text-accent">Always too much, never enough energy</p>
            </div>
            <div className="card">
              <h3 className="mb-2">Technology</h3>
              <p className="small mb-3">Building AR experiences, radio platform, and e-commerce</p>
              <p className="text-accent">Code with care, build with pride</p>
            </div>
            <div className="card">
              <h3 className="mb-2">Community</h3>
              <p className="small mb-3">Managing events, partnerships, and member experience</p>
              <p className="text-accent">Connecting hearts and minds</p>
            </div>
            <div className="card">
              <h3 className="mb-2">Radio</h3>
              <p className="small mb-3">Curating 24/7 content, DJ bookings, and live shows</p>
              <p className="text-accent">Sound that moves bodies and souls</p>
            </div>
          </div>
          
          <CrossCTA 
            primary={{ href: '/contact', label: 'Get in Touch' }}
            secondary={{ href: '/community', label: 'Join Community' }}
          />
        </div>
      </section>

      {/* Mission */}
      <section className="scroll-section bg-accent/10">
        <div className="container text-center">
          <h2 className="mb-6">Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            To create a world where queer people have the fashion, technology, 
            and community support they need to express themselves authentically, 
            connect meaningfully, and thrive unapologetically.
          </p>
          <p className="text-accent font-display font-bold text-2xl">
            Always Too Much, Never Enough
          </p>
        </div>
      </section>
    </>
  )
}