'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { CrossCTA } from '../../../components/CrossCTA'
import { ProductCard } from '../../../components/ProductCard'
import { analytics } from '../../../src/lib/analytics'
import productsData from '../../../data/products.json'

// Product detail interface based on the JSON structure
interface ProductDetail {
  id: string
  title: string
  collection: string
  price: number
  currency: string
  images: string[]
  description: string
  sizes?: string[]
  colors?: string[]
  materials?: string[]
  crossSells?: string[]
  qrRoute: string
  tags: string[]
}

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<ProductDetail | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Find product by slug (slug matches product id)
    const foundProduct = productsData.find(p => p.id === params.slug) as ProductDetail
    
    if (foundProduct) {
      setProduct(foundProduct)
      // Set default selections
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0])
      }
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0])
      }
      // Track product view
      analytics.productView(foundProduct.id, foundProduct.collection)
    }
    
    setLoading(false)
  }, [params.slug])

  const handleAddToCart = () => {
    if (!product) return
    analytics.addToCartClick(product.id)
    // Here you would integrate with your cart system
    alert('Added to cart! (This would integrate with your e-commerce system)')
  }

  const handleBuyNow = () => {
    if (!product) return
    analytics.checkoutClick(product.id)
    // Here you would redirect to checkout
    alert('Redirecting to checkout! (This would integrate with Shopify)')
  }

  const formatPrice = (price: number, currency: string): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currency
    }).format(price)
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="container py-16">
          <div className="animate-pulse">
            <div className="grid md:grid-2 gap-8">
              <div className="aspect-square bg-white/10 rounded" />
              <div className="space-y-4">
                <div className="h-8 bg-white/10 rounded w-3/4" />
                <div className="h-4 bg-white/10 rounded w-1/2" />
                <div className="h-6 bg-white/10 rounded w-1/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded" />
                  <div className="h-4 bg-white/10 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="container py-16 text-center">
          <h1 className="mb-4">Product Not Found</h1>
          <p className="mb-8">The product you're looking for doesn't exist.</p>
          <CrossCTA 
            primary={{ href: '/shop', label: 'Shop All' }}
            secondary={{ href: '/', label: 'Home' }}
          />
        </main>
        <Footer />
      </>
    )
  }

  // Create cross-sell products for recommendations
  const crossSellProducts = product.crossSells?.map(crossSellId => {
    const crossSellProduct = productsData.find(p => p.id === crossSellId)
    if (crossSellProduct) {
      return {
        id: crossSellProduct.id,
        title: crossSellProduct.title,
        priceGBP: crossSellProduct.price,
        image: crossSellProduct.images[0],
        badge: crossSellProduct.collection as any,
        href: `/product/${crossSellProduct.id}`,
        inStock: true
      }
    }
    return null
  }).filter(Boolean) || []

  return (
    <>
      <Header />
      
      <main className="container py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm opacity-75">
          <a href="/shop" className="hover:text-accent transition-colors">Shop</a>
          <span className="mx-2">/</span>
          <span>{product.collection}</span>
          <span className="mx-2">/</span>
          <span>{product.title}</span>
        </nav>

        {/* Product Detail Grid */}
        <div className="grid lg:grid-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white/5 rounded-lg overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="grid grid-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square bg-white/5 rounded overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-accent' 
                        : 'border-transparent hover:border-white/30'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Collection Badge */}
            <div className="inline-block">
              <span className="px-3 py-1 bg-accent text-black text-sm font-bold rounded">
                {product.collection}
              </span>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="text-2xl font-bold text-accent">
                {formatPrice(product.price, product.currency)}
              </div>
            </div>

            {/* Description */}
            <p className="text-lg leading-relaxed opacity-90">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h4 className="mb-3 font-medium">Size</h4>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded transition-colors ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-black'
                          : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h4 className="mb-3 font-medium">Color</h4>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded transition-colors ${
                        selectedColor === color
                          ? 'border-accent bg-accent text-black'
                          : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Materials */}
            {product.materials && product.materials.length > 0 && (
              <div>
                <h4 className="mb-2 font-medium">Materials</h4>
                <ul className="text-sm opacity-75 space-y-1">
                  {product.materials.map((material, index) => (
                    <li key={index}>• {material}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleBuyNow}
                className="w-full btn btn-primary"
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="w-full btn btn-secondary"
              >
                Add to Cart
              </button>
            </div>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div>
                <h4 className="mb-2 font-medium text-sm opacity-75">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cross-sells */}
        {crossSellProducts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-center mb-8">You Might Also Like</h2>
            <div className="grid grid-2 lg:grid-4 gap-6">
              {crossSellProducts.map((crossSellProduct) => (
                crossSellProduct && (
                  <ProductCard
                    key={crossSellProduct.id}
                    product={crossSellProduct}
                    loading={false}
                  />
                )
              ))}
            </div>
          </section>
        )}

        {/* Call to Actions */}
        <div className="text-center">
          <CrossCTA 
            primary={{ href: '/shop', label: 'Continue Shopping' }}
            secondary={{ href: '/lookbook', label: 'View Lookbook' }}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}