'use client'

interface CheckoutButtonProps {
  onCheckout?: () => void
  disabled?: boolean
  children?: React.ReactNode
}

export function CheckoutButton({ onCheckout, disabled = false, children = 'Test Checkout' }: CheckoutButtonProps) {
  const handleClick = () => {
    if (onCheckout) {
      onCheckout()
    } else {
      alert('Checkout functionality working!')
    }
  }

  return (
    <button 
      onClick={handleClick}
      className={`btn btn-primary w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  )
}