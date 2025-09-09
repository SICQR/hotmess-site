'use client'

import { useState } from 'react'

interface ProductInteractiveProps {
  product: {
    sizes: string[]
    inStock: boolean
  }
}

export function ProductInteractive({ product }: ProductInteractiveProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first!')
      return
    }
    alert(`Added to cart: Size ${selectedSize}`)
  }

  return (
    <>
      {/* Size Selection */}
      <div className="mb-6">
        <h4 className="mb-3">Size</h4>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button 
              key={size} 
              onClick={() => setSelectedSize(size)}
              className={`btn btn-sm ${
                selectedSize === size 
                  ? 'btn-primary' 
                  : 'btn-secondary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="mb-8">
        <button 
          onClick={handleAddToCart}
          className={`btn btn-primary w-full ${!product.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </>
  )
}