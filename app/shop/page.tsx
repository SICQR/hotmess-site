import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { CrossCTA } from '../../components/CrossCTA'
import { ProductCard } from '../../components/ProductCard'

// Sample product data using the correct types
const featuredProducts = [
  {
    id: 'superhung-vest-black',
    title: 'SUPERHUNG Vest',
    priceGBP: 45,
    image: '/superhung-vest.svg',
    badge: 'SUPERHUNG' as const,
    href: '/product/superhung-vest-black',
    inStock: true
  },
  {
    id: 'raw-harness-black',
    title: 'RAW Leather Harness',
    priceGBP: 65,
    image: '/images/products/raw-harness-black.jpg',
    badge: 'RAW' as const,
    href: '/product/raw-harness-black',
    inStock: true
  },
  {
    id: 'high-varsity-navy',
    title: 'HIGH Varsity Jacket',
    priceGBP: 95,
    compareAtGBP: 120,
    image: '/images/products/high-varsity-navy.jpg',
    badge: 'HIGH' as const,
    href: '/product/high-varsity-navy',
    inStock: true
  },
  {
    id: 'hnh-lube',
    title: 'HNH MESS Lube',
    priceGBP: 18,
    image: '/hnh-lube.svg',
    badge: 'HIGH' as const,
    href: '/product/hnh-lube',
    inStock: false
  }
]

export const metadata = {
  title: 'HOTMESS Shop — Collections',
  description: 'RAW, HUNG, HIGH. SUPERHUNG, SUPERHIGH. Queer fashion from London.',
}

export default function ShopPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <div className="animate-fade">
            <h1 className="mb-6">
              SHOP<br/>
              <span className="text-accent">COLLECTIONS</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              RAW, HUNG, HIGH. SUPERHUNG, SUPERHIGH.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#collections" className="btn btn-primary">
                Browse Collections
              </a>
              <a href="/lookbook" className="btn btn-secondary">
                View Lookbook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section id="collections" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Collections</h2>
          <div className="grid grid-3 gap-8 mb-8">
            <div className="card animate-fade">
              <div className="aspect-square bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-400">RAW</span>
              </div>
              <h3 className="mb-2">RAW COLLECTION</h3>
              <p className="small mb-4">Leather-lux grit. For the uncompromising.</p>
              <div className="text-lg font-bold">From £45</div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-square bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-400">HUNG</span>
              </div>
              <h3 className="mb-2">HUNG COLLECTION</h3>
              <p className="small mb-4">Body-con gym-to-rave. Show what you've got.</p>
              <div className="text-lg font-bold">From £38</div>
            </div>
            <div className="card animate-fade" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-gray-200 rounded mb-4 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-400">HIGH</span>
              </div>
              <h3 className="mb-2">HIGH COLLECTION</h3>
              <p className="small mb-4">Varsity-coded euphoria. Elevated streetwear.</p>
              <div className="text-lg font-bold">From £52</div>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '#featured', label: 'View Featured' }}
            secondary={{ href: '/lookbook', label: 'Editorial Lookbook' }}
          />
        </div>
      </section>

      {/* SUPERHUNG/SUPERHIGH */}
      <section className="scroll-section bg-accent/5">
        <div className="container">
          <h2 className="text-center mb-12">SUPER COLLECTIONS</h2>
          <div className="grid md:grid-2 gap-8 mb-8">
            <div className="card">
              <div className="aspect-[4/3] bg-gradient-to-br from-red-500 to-orange-500 rounded mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SUPERHUNG</span>
              </div>
              <h3 className="mb-2">SUPERHUNG</h3>
              <p className="small mb-4">
                Maximum impact. For bodies that demand attention. 
                Limited drops, unlimited confidence.
              </p>
              <div className="text-lg font-bold text-accent">From £75</div>
            </div>
            <div className="card">
              <div className="aspect-[4/3] bg-gradient-to-br from-purple-500 to-pink-500 rounded mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">SUPERHIGH</span>
              </div>
              <h3 className="mb-2">SUPERHIGH</h3>
              <p className="small mb-4">
                Euphoric elevation. Designer collaboration pieces 
                that push boundaries and break rules.
              </p>
              <div className="text-lg font-bold text-accent">From £85</div>
            </div>
          </div>
          <CrossCTA 
            primary={{ href: '#featured', label: 'Shop Now' }}
            secondary={{ href: '/drop', label: 'Latest Drops' }}
          />
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Featured</h2>
          <div className="grid grid-2 lg:grid-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product}
                loading={false}
              />
            ))}
          </div>
          <CrossCTA 
            primary={{ href: '/lookbook', label: 'View in Context' }}
            secondary={{ href: '/hand-in-hand', label: 'Care Products' }}
          />
        </div>
      </section>

      {/* Size Guide */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">Size Guide</h2>
          <div className="max-w-4xl mx-auto">
            <div className="card">
              <div className="grid md:grid-2 gap-8">
                <div>
                  <h4 className="mb-4">Sizing Philosophy</h4>
                  <p className="small mb-4">
                    Every body is different. Our collections are designed to 
                    celebrate your form, not constrain it.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• RAW: Structured fits, true to size</li>
                    <li>• HUNG: Body-conscious, size down for tighter fit</li>
                    <li>• HIGH: Relaxed streetwear, size up for oversized</li>
                    <li>• SUPER: Premium fits, check individual product notes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4">Need Help?</h4>
                  <p className="small mb-4">
                    DM us on Instagram or join our Telegram rooms for 
                    sizing advice from the community.
                  </p>
                  <div className="flex gap-3">
                    <a href="/rooms" className="btn btn-secondary btn-sm">
                      Join Rooms
                    </a>
                  </div>
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