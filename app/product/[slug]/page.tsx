import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { CrossCTA } from '../../../components/CrossCTA'
import { notFound } from 'next/navigation'

// Sample product data - in production this would come from a CMS/database
const products = [
  {
    slug: 'superhung-vest-black',
    title: 'SUPERHUNG Vest',
    priceGBP: 45,
    compareAtGBP: null,
    images: ['/superhung-vest.svg'],
    badge: 'SUPERHUNG' as const,
    description: 'Maximum impact vest for bodies that demand attention. Premium materials meet unapologetic design.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    features: ['Premium cotton blend', 'Reinforced seams', 'Signature SUPERHUNG branding']
  },
  {
    slug: 'raw-harness-black',
    title: 'RAW Leather Harness',
    priceGBP: 65,
    compareAtGBP: null,
    images: ['/images/products/raw-harness-black.jpg'],
    badge: 'RAW' as const,
    description: 'Leather-lux grit for the uncompromising. Handcrafted quality that makes a statement.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    features: ['Genuine leather', 'Adjustable straps', 'Chrome hardware']
  },
  {
    slug: 'high-varsity-navy',
    title: 'HIGH Varsity Jacket',
    priceGBP: 95,
    compareAtGBP: 120,
    images: ['/images/products/high-varsity-navy.jpg'],
    badge: 'HIGH' as const,
    description: 'Varsity-coded euphoria in premium navy. Limited edition design for the elevated experience.',
    sizes: ['S', 'M', 'L', 'XL'],
    inStock: true,
    features: ['Premium wool blend', 'Leather sleeves', 'Embroidered patches']
  },
  {
    slug: 'test',
    title: 'Test Product',
    priceGBP: 25,
    compareAtGBP: null,
    images: ['/og.svg'],
    badge: 'RAW' as const,
    description: 'Test product for development and smoke testing.',
    sizes: ['S', 'M', 'L'],
    inStock: true,
    features: ['Test feature 1', 'Test feature 2', 'Test feature 3']
  }
]

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  const product = products.find(p => p.slug === params.slug)
  
  if (!product) {
    return {
      title: 'Product Not Found — HOTMESS',
    }
  }

  return {
    title: `${product.title} — HOTMESS`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: PageProps) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      
      {/* Product Detail */}
      <section className="scroll-section pt-24">
        <div className="container">
          <div className="grid lg:grid-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src={product.images[0]} 
                  alt={product.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              {product.badge && (
                <div className="inline-block px-3 py-1 bg-accent text-black text-sm font-bold uppercase tracking-wider rounded mb-4">
                  {product.badge}
                </div>
              )}
              
              <h1 className="text-4xl font-display font-bold mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl font-bold">£{product.priceGBP}</span>
                {product.compareAtGBP && (
                  <span className="text-lg opacity-50 line-through">£{product.compareAtGBP}</span>
                )}
              </div>

              <p className="text-lg mb-8 opacity-90">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-bold mb-3">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button 
                      key={size}
                      className="px-4 py-2 border border-white/20 rounded hover:border-accent hover:text-accent transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-bold mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <button className="btn btn-primary flex-1">
                  Add to Cart — £{product.priceGBP}
                </button>
                <button className="btn btn-secondary">
                  ♡
                </button>
              </div>

              {/* Stock Status */}
              <div className="mt-4 text-sm opacity-75">
                {product.inStock ? (
                  <span className="text-green-400">✓ In Stock</span>
                ) : (
                  <span className="text-red-400">✗ Out of Stock</span>
                )}
              </div>
            </div>
          </div>

          {/* Related Products CTA */}
          <div className="mt-16">
            <CrossCTA
              primary={{ href: '/shop', label: 'Shop All' }}
              secondary={{ href: '/drop', label: 'Latest Drops' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}