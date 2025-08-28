import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const metadata = {
  title: 'Terms of Service — HOTMESS London',
  description: 'Terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <>
      <Header />
      
      <section className="scroll-section min-h-screen">
        <div className="container max-w-4xl">
          <h1 className="mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Agreement to Terms</h2>
              <p className="text-sm mb-4">
                By accessing HOTMESS London's website and services, you agree to these terms. 
                If you don't agree, please don't use our services.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Use of Services</h2>
              <ul className="space-y-2 text-sm">
                <li>• You must be 18+ to make purchases or join adult community spaces</li>
                <li>• Provide accurate information for orders and account creation</li>
                <li>• Don't use our services for illegal activities</li>
                <li>• Respect other community members and our brand</li>
                <li>• Don't attempt to hack, spam, or disrupt our services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Purchases and Refunds</h2>
              <ul className="space-y-2 text-sm">
                <li>• All sales are final unless items arrive damaged or defective</li>
                <li>• Limited drop items cannot be returned or exchanged</li>
                <li>• Custom or personalized items are non-refundable</li>
                <li>• Contact us within 7 days of delivery for damage claims</li>
                <li>• Refunds processed within 5-10 business days</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Affiliate Program</h2>
              <ul className="space-y-2 text-sm">
                <li>• Commission rates and structure may change with notice</li>
                <li>• Payment requires minimum £25 balance</li>
                <li>• Fraudulent activity results in immediate termination</li>
                <li>• QR codes and affiliate links are for personal use only</li>
                <li>• We reserve the right to modify or terminate the program</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
              <ul className="space-y-2 text-sm">
                <li>• Telegram community access requires verification</li>
                <li>• Harassment, hate speech, or illegal content prohibited</li>
                <li>• Respect privacy and consent in all interactions</li>
                <li>• Commercial activity requires moderator approval</li>
                <li>• Violation may result in permanent ban from all services</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Intellectual Property</h2>
              <ul className="space-y-2 text-sm">
                <li>• HOTMESS branding and designs are our property</li>
                <li>• Don't reproduce or resell our content without permission</li>
                <li>• Music releases subject to separate licensing terms</li>
                <li>• User-generated content may be featured with attribution</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-sm mb-4">
                We provide services "as is" and can't guarantee uninterrupted access. 
                We're not liable for indirect damages or losses beyond the value of your purchase.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-sm">
                Questions about these terms? Email us at:{' '}
                <a href="mailto:legal@hotmess-ldn.com" className="text-accent">
                  legal@hotmess-ldn.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}