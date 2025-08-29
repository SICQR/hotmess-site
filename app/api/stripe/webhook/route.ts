import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const headersList = await headers()
    const signature = headersList.get('stripe-signature')
    
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe signature' },
        { status: 400 }
      )
    }
    
    // In production, verify the webhook signature
    // const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    // const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET
    // const event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
    
    // For now, parse the body directly
    const event = JSON.parse(body)
    
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object)
        break
      case 'payment_intent.succeeded':
        await handlePaymentSucceeded(event.data.object)
        break
      case 'invoice.payment_succeeded':
        await handleInvoicePayment(event.data.object)
        break
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }
    
    return NextResponse.json({ received: true })
    
  } catch (error) {
    console.error('Stripe webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

async function handleCheckoutCompleted(session: any) {
  // Track conversion for affiliate commission
  const conversionData = {
    event: 'purchase',
    sessionId: session.id,
    amount: session.amount_total,
    currency: session.currency,
    customerEmail: session.customer_email,
    timestamp: Date.now()
  }
  
  // Send to Make.com for affiliate tracking
  const webhookUrl = process.env.MAKE_WEBHOOK_URL
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'conversion',
        data: conversionData
      })
    }).catch(console.error)
  }
}

async function handlePaymentSucceeded(paymentIntent: any) {
  console.log('Payment succeeded:', paymentIntent.id)
}

async function handleInvoicePayment(invoice: any) {
  console.log('Invoice payment:', invoice.id)
}