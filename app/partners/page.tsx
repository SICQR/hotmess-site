import { CrossCTA } from '../../components/CrossCTA'

export default function Partners() {
  const partners = [
    {
      name: 'VENUE COLLECTIVE',
      type: 'venue',
      description: 'Premium event spaces across London',
      status: 'active',
      relationship: 'Exclusive hosting partner'
    },
    {
      name: 'REBEL BRANDS',
      type: 'brand',
      description: 'Cutting-edge fashion collaborations',
      status: 'active',
      relationship: 'Design partnership'
    },
    {
      name: 'UNDERGROUND ARTISTS',
      type: 'artist',
      description: 'Emerging talent showcase',
      status: 'active',
      relationship: 'Creative collaboration'
    },
    {
      name: 'PULSE MEDIA',
      type: 'media',
      description: 'Digital content and promotion',
      status: 'active',
      relationship: 'Marketing alliance'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h1 className="mb-6">Partners</h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Collaborating with venues, brands, artists, and media to create unforgettable experiences
          </p>
        </div>
      </section>

      {/* Partner Directory */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-8">Our Partners</h2>
          <div className="grid grid-2 mb-8">
            {partners.map((partner, i) => (
              <div key={i} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="mb-2">{partner.name}</h3>
                    <span className="text-sm text-accent uppercase">{partner.type}</span>
                  </div>
                  <span className="text-green-400 text-sm">✓ Active</span>
                </div>
                <p className="mb-3">{partner.description}</p>
                <p className="small opacity-75">{partner.relationship}</p>
              </div>
            ))}
          </div>
          
          <CrossCTA 
            primary={{ href: '/contact', label: 'Become a Partner' }}
            secondary={{ href: '/events', label: 'View Events' }}
          />
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="scroll-section bg-white/5">
        <div className="container">
          <h2 className="text-center mb-8">Partnership Benefits</h2>
          <div className="grid grid-3 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="mb-2">Collaboration</h3>
              <p className="small">Work together on exclusive events and experiences</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="mb-2">Growth</h3>
              <p className="small">Access to our engaged community and platform</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="mb-2">Revenue</h3>
              <p className="small">Shared profits and affiliate opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}