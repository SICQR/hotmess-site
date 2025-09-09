import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { ProductCard } from '../../../components/ProductCard'
import { ProductInteractive } from '../../../components/ProductInteractive'
import { CrossCTA } from '../../../components/CrossCTA'

// Sample product data - in a real app this would come from an API or database
const sampleProducts = {
  'superhung-vest-black': {
    id: 'superhung-vest-black',
    title: 'SUPERHUNG Vest - Black',
    priceGBP: 45,
    compareAtGBP: 65,
    image: '/superhung-vest.svg',
    badge: 'SUPERHUNG' as const,
    href: '/product/superhung-vest-black',
    inStock: true,
    description: 'Maximum impact piece for those who demand attention. Gym-to-rave flex with uncompromising quality.',
    details: 'Technical mesh construction with reinforced seams. Designed for bodies in motion.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    materials: ['90% Polyester', '10% Elastane'],
    care: ['Machine wash cold', 'Hang dry', 'Do not bleach']
  },
  'test': {
    id: 'test',
    title: 'Test Product',
    priceGBP: 25,
    compareAtGBP: undefined,
    image: '/hnh-lube.svg',
    badge: 'HIGH' as const,
    href: '/product/test',
    inStock: true,
    description: 'Test product for development and testing purposes.',
    details: 'This is a test product used for development and testing.',
    sizes: ['One Size'],
    materials: ['Test Material'],
    care: ['Test Care Instructions']
  }
}

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = sampleProducts[params.slug as keyof typeof sampleProducts]
  
  if (!product) {
    return {
      title: 'Product Not Found — HOTMESS',
      description: 'The product you are looking for could not be found.'
    }
  }

  return {
    title: `${product.title} — HOTMESS`,
    description: product.description
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = sampleProducts[params.slug as keyof typeof sampleProducts]

  if (!product) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl mb-4">Product Not Found</h1>
            <p className="mb-8">The product you are looking for could not be found.</p>
            <a href="/shop" className="btn btn-primary">Back to Shop</a>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  // Generate related products
  const relatedProducts = Object.values(sampleProducts)
    .filter(p => p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      
      {/* Product Hero */}
      <section className="scroll-section pt-24">
        <div className="container">
          <div className="grid lg:grid-2 gap-12 items-start">
            {/* Product Image */}
            <div className="animate-fade">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade" style={{ animationDelay: '0.1s' }}>
              <div className="mb-4">
                <span className="badge badge-primary">{product.badge}</span>
              </div>
              
              <h1 className="text-4xl mb-4">{product.title}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold">£{product.priceGBP}</span>
                {product.compareAtGBP && (
                  <span className="text-xl line-through opacity-60">£{product.compareAtGBP}</span>
                )}
              </div>

              <p className="text-lg mb-8 opacity-90">{product.description}</p>

              <ProductInteractive product={product} />

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="mb-2">Details</h4>
                  <p className="small opacity-75">{product.details}</p>
                </div>

                <div>
                  <h4 className="mb-2">Materials</h4>
                  <ul className="small opacity-75">
                    {product.materials.map((material, index) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2">Care Instructions</h4>
                  <ul className="small opacity-75">
                    {product.care.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="scroll-section">
          <div className="container">
            <h2 className="text-center mb-12">You Might Also Like</h2>
            <div className="grid md:grid-3 gap-6 mb-8">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard 
                  key={relatedProduct.id}
                  product={relatedProduct}
                  loading={false}
                />
              ))}
            </div>
            <CrossCTA 
              primary={{ href: '/shop', label: 'View All' }}
              secondary={{ href: '/drop', label: 'Latest Drops' }}
            />
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}