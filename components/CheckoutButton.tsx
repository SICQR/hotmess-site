'use client'

import { useState } from 'react'
import { buildUtm } from '../src/lib/utm'

interface CheckoutButtonProps {
  productId: string
  variantId?: string
  className?: string
  children?: React.ReactNode
}

export function CheckoutButton({ 
  productId, 
  variantId, 
  className = "btn btn-primary",
  children = "Add to Cart"
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    if (isLoading) return
    
    setIsLoading(true)
    
    try {
      // Create checkout with UTM parameters
      const checkoutUrl = buildUtm(
        'https://checkout.hotmess.example.com', // Replace with actual checkout URL
        {
          source: 'hotmess-web',
          medium: 'storefront',
          campaign: 'drop'
        }
      )
      
      // For now, just redirect to the checkout URL
      // In a real implementation, this would create a Shopify checkout
      window.open(checkoutUrl, '_blank')
      
    } catch (error) {
      console.error('Checkout error:', error)
      // Show error message to user
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`${className} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {isLoading ? 'Adding...' : children}
    </button>
  )
}