import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'

export const metadata = {
  title: 'HOTMESS Lookbook — Editorial',
  description: 'White editorial brutalism. HOTMESS collections in context.',
}

export default function LookbookPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6" style={{ fontFamily: 'serif', fontWeight: 300, letterSpacing: '-0.02em' }}>
              LOOKBOOK
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Editorial brutalism. Collections in context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#editorial" className="btn btn-primary">
                View Editorial
              </a>
              <a href="/shop" className="btn btn-secondary">
                Shop Collections
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section id="editorial" className="scroll-section">
        <div className="container">
          <div className="grid gap-4 md:gap-8">
            {/* Large Feature */}
            <div className="grid md:grid-2 gap-4 md:gap-8">
              <div className="aspect-[3/4] bg-gray-200 rounded animate-fade flex items-center justify-center">
                <span className="text-4xl font-light opacity-50">01</span>
              </div>
              <div className="flex flex-col justify-center animate-fade" style={{ animationDelay: '0.1s' }}>
                <h2 className="mb-6" style={{ fontFamily: 'serif', fontWeight: 300 }}>
                  RAW COLLECTION
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Leather-lux grit meets London's uncompromising edge. 
                  Every piece tells a story of resilience, desire, and unapologetic self-expression.
                </p>
                <p className="small opacity-75 mb-8">
                  Photography: Studio portraits against stark white backgrounds. 
                  Models cast for authenticity, not perfection. Natural lighting, minimal retouching.
                </p>
                <CrossCTA 
                  primary={{ href: '/shop', label: 'Shop RAW' }}
                  secondary={{ href: '#hung', label: 'Next Collection' }}
                />
              </div>
            </div>

            {/* Three Column Grid */}
            <div className="grid md:grid-3 gap-4 mt-16">
              <div className="aspect-[3/4] bg-gray-200 rounded animate-fade flex items-center justify-center">
                <span className="text-2xl font-light opacity-50">02</span>
              </div>
              <div className="aspect-[3/4] bg-gray-200 rounded animate-fade flex items-center justify-center" style={{ animationDelay: '0.1s' }}>
                <span className="text-2xl font-light opacity-50">03</span>
              </div>
              <div className="aspect-[3/4] bg-gray-200 rounded animate-fade flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
                <span className="text-2xl font-light opacity-50">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HUNG Collection */}
      <section id="hung" className="scroll-section">
        <div className="container">
          <div className="grid md:grid-2 gap-8 items-center">
            <div className="order-2 md:order-1 animate-fade">
              <h2 className="mb-6" style={{ fontFamily: 'serif', fontWeight: 300 }}>
                HUNG COLLECTION
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Body-conscious silhouettes that celebrate form and function. 
                From gym to rave, these pieces move with you.
              </p>
              <div className="space-y-4 text-sm">
                <div className="border-l-2 border-gray-300 pl-4">
                  <strong>Materials:</strong> Technical fabrics, moisture-wicking, four-way stretch
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <strong>Fit:</strong> Body-conscious, size down for tighter fit
                </div>
                <div className="border-l-2 border-gray-300 pl-4">
                  <strong>Styling:</strong> Layer over base pieces or wear standalone
                </div>
              </div>
              <div className="mt-8">
                <CrossCTA 
                  primary={{ href: '/shop', label: 'Shop HUNG' }}
                  secondary={{ href: '#high', label: 'Next Collection' }}
                />
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-2 gap-4">
              <div className="aspect-[3/4] bg-gray-200 rounded animate-fade flex items-center justify-center">
                <span className="text-xl font-light opacity-50">05</span>
              </div>
              <div className="aspect-[3/4] bg-gray-200 rounded animate-fade flex items-center justify-center" style={{ animationDelay: '0.1s' }}>
                <span className="text-xl font-light opacity-50">06</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGH Collection */}
      <section id="high" className="scroll-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-6" style={{ fontFamily: 'serif', fontWeight: 300 }}>
              HIGH COLLECTION
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Varsity-coded euphoria meets elevated streetwear. 
              Academic aesthetics reimagined for the club and beyond.
            </p>
          </div>
          
          <div className="grid gap-4">
            <div className="grid md:grid-4 gap-4">
              <div className="aspect-square bg-gray-200 rounded animate-fade flex items-center justify-center">
                <span className="text-lg font-light opacity-50">07</span>
              </div>
              <div className="aspect-square bg-gray-200 rounded animate-fade flex items-center justify-center" style={{ animationDelay: '0.1s' }}>
                <span className="text-lg font-light opacity-50">08</span>
              </div>
              <div className="aspect-square bg-gray-200 rounded animate-fade flex items-center justify-center" style={{ animationDelay: '0.2s' }}>
                <span className="text-lg font-light opacity-50">09</span>
              </div>
              <div className="aspect-square bg-gray-200 rounded animate-fade flex items-center justify-center" style={{ animationDelay: '0.3s' }}>
                <span className="text-lg font-light opacity-50">10</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <CrossCTA 
                primary={{ href: '/shop', label: 'Shop HIGH' }}
                secondary={{ href: '#super', label: 'SUPER Collections' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SUPER Collections */}
      <section id="super" className="scroll-section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-6" style={{ fontFamily: 'serif', fontWeight: 300 }}>
              SUPER COLLECTIONS
            </h2>
            <p className="text-lg max-w-3xl mx-auto opacity-75">
              Premium pieces for maximum impact. Limited drops, unlimited confidence.
            </p>
          </div>
          
          <div className="grid md:grid-2 gap-12">
            <div className="text-center">
              <div className="aspect-[4/5] bg-gradient-to-br from-red-500 to-orange-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-4xl font-light text-white opacity-75">SUPERHUNG</span>
              </div>
              <h3 className="mb-4" style={{ fontFamily: 'serif', fontWeight: 300 }}>SUPERHUNG</h3>
              <p className="small mb-6">
                Maximum impact pieces for bodies that demand attention. 
                Technical fabrics meet club-ready aesthetics.
              </p>
              <a href="/shop" className="btn btn-primary">Shop SUPERHUNG</a>
            </div>
            
            <div className="text-center">
              <div className="aspect-[4/5] bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-4xl font-light text-white opacity-75">SUPERHIGH</span>
              </div>
              <h3 className="mb-4" style={{ fontFamily: 'serif', fontWeight: 300 }}>SUPERHIGH</h3>
              <p className="small mb-6">
                Designer collaboration pieces that push boundaries. 
                Limited releases, elevated materials, premium construction.
              </p>
              <a href="/shop" className="btn btn-primary">Shop SUPERHIGH</a>
            </div>
          </div>
        </div>
      </section>

      {/* Styling Notes */}
      <section className="scroll-section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12" style={{ fontFamily: 'serif', fontWeight: 300 }}>
              Styling Philosophy
            </h2>
            
            <div className="grid md:grid-2 gap-8">
              <div className="space-y-6">
                <h4 className="font-semibold">Minimalist Approach</h4>
                <p className="small">
                  Let the garments speak. Clean lines, natural poses, 
                  authentic casting. No excessive styling or props.
                </p>
                
                <h4 className="font-semibold">Technical Details</h4>
                <p className="small">
                  Focus on fit, fabric, and construction. Show how pieces 
                  move with the body, highlight technical features.
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-semibold">Contextual Shooting</h4>
                <p className="small">
                  Studio for product focus, location for lifestyle. 
                  London settings when relevant to the narrative.
                </p>
                
                <h4 className="font-semibold">Authentic Casting</h4>
                <p className="small">
                  Real people from the community. Diverse bodies, 
                  genuine expressions, honest representation.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <CrossCTA 
                primary={{ href: '/shop', label: 'Shop All Collections' }}
                secondary={{ href: '/hand-in-hand', label: 'Community Care' }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}