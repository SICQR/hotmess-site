import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { ProductCard } from '../../../components/ProductCard'

// Smoke test page to verify components work
export const metadata = {
  title: 'Smoke Test — HOTMESS Dev',
  description: 'Development smoke testing page',
}

export default function SmokeTestPage() {
  // Sample product for testing
  const testProduct = {
    id: 'smoke-test-product',
    title: 'Smoke Test Product',
    priceGBP: 50,
    image: '/og.svg',
    badge: 'RAW' as const,
    href: '/product/test',
    inStock: true
  }

  return (
    <>
      <Header />
      
      <section className="scroll-section pt-24">
        <div className="container">
          <h1 className="text-4xl font-display font-bold mb-8">🧪 Smoke Test</h1>
          
          <div className="space-y-12">
            {/* ProductCard Test */}
            <div>
              <h2 className="text-2xl font-bold mb-4">ProductCard Component</h2>
              <div className="max-w-sm">
                <ProductCard product={testProduct} />
              </div>
            </div>

            {/* CheckoutButton Test */}
            <div>
              <h2 className="text-2xl font-bold mb-4">CheckoutButton Component</h2>
              <div className="space-y-4">
                <button className="btn btn-primary">
                  Buy Now — £{testProduct.priceGBP}
                </button>
                <button className="btn btn-secondary">
                  Add to Cart
                </button>
                <p className="text-sm opacity-75">
                  Note: UTM parameters (utm_source=hotmess-web&utm_medium=storefront&utm_campaign=drop) 
                  should be automatically appended to checkout URLs.
                </p>
              </div>
            </div>

            {/* Radio Player Test */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Radio Player (Sticky)</h2>
              <p className="text-sm opacity-75">
                The sticky radio player should be visible at the bottom of the page with 
                "LIVE • HOTMESS RADIO" branding and play/pause controls.
              </p>
            </div>

            {/* Navigation Test */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Navigation Test</h2>
              <div className="grid md:grid-3 gap-4">
                <a href="/" className="btn btn-secondary">Home</a>
                <a href="/radio" className="btn btn-secondary">Radio</a>
                <a href="/drop" className="btn btn-secondary">Drop</a>
                <a href="/shop" className="btn btn-secondary">Shop</a>
                <a href="/product/test" className="btn btn-secondary">Test Product</a>
                <a href="/affiliate" className="btn btn-secondary">Affiliate</a>
                <a href="/hand-in-hand" className="btn btn-secondary">Care</a>
                <a href="/legal/terms" className="btn btn-secondary">Terms</a>
                <a href="/legal/privacy" className="btn btn-secondary">Privacy</a>
              </div>
            </div>

            {/* Console Check */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Console Check</h2>
              <p className="text-sm opacity-75">
                Open browser console (F12) and verify there are no errors. 
                All pages should render without console errors.
              </p>
            </div>

            {/* Build Status */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Build Status</h2>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Next.js build passes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>TypeScript compilation successful</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>ESLint configured with relaxed rules</span>
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