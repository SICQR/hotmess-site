'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProductCard as ProductCardType } from '../src/types/product'
import { preserveUtm } from '../src/lib/utm'
import { analytics } from '../src/lib/analytics'

interface ProductCardProps {
  product: ProductCardType
  loading?: boolean
}

const BADGE_COLORS = {
  RAW: 'bg-stone-700 text-white',
  HUNG: 'bg-red-600 text-white', 
  HIGH: 'bg-blue-600 text-white',
  SUPERHUNG: 'bg-orange-600 text-white',
  SUPERHIGH: 'bg-purple-600 text-white',
  HNH_MESS: 'bg-pink-600 text-white',
}

export function ProductCard({ product, loading = false }: ProductCardProps) {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  if (loading) {
    return <ProductCardSkeleton />
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(price)
  }

  const href = preserveUtm(product.href)

  const handleClick = () => {
    // Track product view
    analytics.productView(product.id, product.badge)
  }

  return (
    <Link 
      href={href}
      className="group block"
      aria-label={`View ${product.title}`}
      onClick={handleClick}
    >
      <div className="card p-0 overflow-hidden transform transition-transform hover:scale-[1.02] focus-within:scale-[1.02]">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-white/5">
          {!imageError ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              className={`object-cover transition-opacity duration-300 ${
                imageLoading ? 'opacity-0' : 'opacity-100'
              }`}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-white/10">
              <span className="text-sm opacity-50">Image unavailable</span>
            </div>
          )}
          
          {imageLoading && (
            <div className="absolute inset-0 bg-white/10 animate-pulse" />
          )}

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded text-xs font-bold ${BADGE_COLORS[product.badge]}`}>
              {product.badge}
            </span>
          </div>

          {/* Stock status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="bg-white/90 text-black px-3 py-1 rounded font-medium text-sm">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium mb-2 group-hover:text-accent transition-colors">
            {product.title}
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">
                {formatPrice(product.priceGBP)}
              </span>
              {product.compareAtGBP && (
                <span className="text-sm opacity-60 line-through">
                  {formatPrice(product.compareAtGBP)}
                </span>
              )}
            </div>
            
            {product.inStock ? (
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                In Stock
              </span>
            ) : (
              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded">
                Sold Out
              </span>
            )}
          </div>
          
          {/* Sale indicator */}
          {product.compareAtGBP && product.compareAtGBP > product.priceGBP && (
            <div className="mt-2">
              <span className="text-xs bg-accent text-black px-2 py-1 rounded font-bold">
                SALE
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

function ProductCardSkeleton() {
  return (
    <div className="card p-0 overflow-hidden">
      {/* Image skeleton */}
      <div className="aspect-[3/4] bg-white/10 animate-pulse" />
      
      {/* Content skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-white/10 rounded animate-pulse" />
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 bg-white/10 rounded animate-pulse" />
          <div className="h-5 w-12 bg-white/10 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export { ProductCardSkeleton }