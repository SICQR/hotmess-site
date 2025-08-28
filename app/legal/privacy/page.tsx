import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const metadata = {
  title: 'Privacy Policy — HOTMESS London',
  description: 'How we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      
      <section className="scroll-section min-h-screen">
        <div className="container max-w-4xl">
          <h1 className="mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Data We Collect</h2>
              <ul className="space-y-2 text-sm">
                <li>• Email addresses for newsletter and account creation</li>
                <li>• Purchase history for order fulfillment and customer service</li>
                <li>• Website usage data via cookies and analytics</li>
                <li>• QR code scan data for affiliate tracking</li>
                <li>• Community interactions in Telegram rooms (if you join)</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">How We Use Your Data</h2>
              <ul className="space-y-2 text-sm">
                <li>• Process orders and provide customer support</li>
                <li>• Send relevant updates about products and events</li>
                <li>• Improve website performance and user experience</li>
                <li>• Track affiliate performance and calculate commissions</li>
                <li>• Ensure community safety and moderation</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-sm mb-4">We use the following services that may collect data:</p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Shopify:</strong> E-commerce platform for order processing</li>
                <li>• <strong>Google Analytics:</strong> Website traffic analysis</li>
                <li>• <strong>Meta Pixel:</strong> Social media advertising (with consent)</li>
                <li>• <strong>Vercel:</strong> Website hosting and performance</li>
                <li>• <strong>Make.com:</strong> Workflow automation and data processing</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Your Rights</h2>
              <ul className="space-y-2 text-sm">
                <li>• Access: Request a copy of your data</li>
                <li>• Correction: Update incorrect information</li>
                <li>• Deletion: Request removal of your data</li>
                <li>• Portability: Receive data in a common format</li>
                <li>• Objection: Opt out of marketing communications</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-sm">
                For privacy-related questions or requests, email us at:{' '}
                <a href="mailto:privacy@hotmess-ldn.com" className="text-accent">
                  privacy@hotmess-ldn.com
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