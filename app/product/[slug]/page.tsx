import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { CheckoutButton } from '../../../components/CheckoutButton'
import { CrossCTA } from '../../../components/CrossCTA'
import dropsData from '../../../src/data/drops.json'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return dropsData.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = dropsData.find(p => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.title} — HOTMESS London`,
    description: `Get the ${product.title} from HOTMESS London. £${product.price}. Limited quantities.`,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = dropsData.find(p => p.slug === params.slug)
  
  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      
      {/* Product Hero */}
      <section className="scroll-section min-h-screen flex items-center">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👕</div>
                <p className="text-sm opacity-75">Product Image</p>
                <p className="text-xs opacity-50 mt-2">{product.image}</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="text-sm font-display uppercase tracking-wider opacity-75 mb-2">
                  {product.sku}
                </div>
                <h1 className="text-4xl font-display font-bold mb-4">{product.title}</h1>
                <div className="text-2xl font-bold text-accent mb-6">
                  £{product.price}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Premium quality piece from the HOTMESS collection. 
                  Designed for those who demand attention and never compromise on style.
                </p>
                <p>
                  Each piece is crafted with attention to detail and features our signature 
                  brutalist aesthetic. Limited quantities ensure exclusivity.
                </p>
              </div>

              <div className="space-y-4">
                <CheckoutButton 
                  productId={product.slug}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Add to Cart — £{product.price}
                </CheckoutButton>
                
                <div className="text-sm opacity-75">
                  <p>• Free shipping on orders over £75</p>
                  <p>• 14-day return policy</p>
                  <p>• Sustainable packaging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="scroll-section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-2 gap-8">
              <div className="card">
                <h3 className="font-display font-bold mb-4">Details</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Premium cotton blend construction</li>
                  <li>• Signature HOTMESS branding</li>
                  <li>• Pre-shrunk and colorfast</li>
                  <li>• Unisex sizing</li>
                  <li>• Machine washable (cold)</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="font-display font-bold mb-4">Sizing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>XS</span>
                    <span>32-34"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>S</span>
                    <span>34-36"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>M</span>
                    <span>36-38"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>L</span>
                    <span>38-40"</span>
                  </div>
                  <div className="flex justify-between">
                    <span>XL</span>
                    <span>40-42"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="scroll-section">
        <div className="container">
          <h2 className="text-center mb-12">You Might Also Like</h2>
          <div className="grid md:grid-3 gap-6 mb-8">
            {dropsData
              .filter(p => p.slug !== product.slug)
              .slice(0, 3)
              .map((relatedProduct, index) => (
                <a 
                  key={relatedProduct.slug}
                  href={`/product/${relatedProduct.slug}`}
                  className="card animate-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square bg-white/5 rounded mb-4 flex items-center justify-center">
                    <span className="text-sm opacity-75">{relatedProduct.title}</span>
                  </div>
                  <h4 className="font-bold mb-2">{relatedProduct.title}</h4>
                  <div className="text-accent font-bold">£{relatedProduct.price}</div>
                </a>
              ))
            }
          </div>
          
          <CrossCTA 
            primary={{ href: '/drop', label: 'View All Drops' }}
            secondary={{ href: '/shop', label: 'Shop Collection' }}
          />
        </div>
      </section>

      <Footer />
    </>
  )
}