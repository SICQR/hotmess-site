import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const metadata = {
  title: 'Cookie Policy — HOTMESS London',
  description: 'How we use cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <>
      <Header />
      
      <section className="scroll-section min-h-screen">
        <div className="container max-w-4xl">
          <h1 className="mb-8">Cookie Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">What Are Cookies</h2>
              <p className="text-sm mb-4">
                Cookies are small text files stored on your device when you visit our website. 
                They help us remember your preferences and understand how you use our site.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-accent mb-2">Necessary Cookies</h3>
                  <p className="text-sm">
                    Essential for website functionality. These can't be disabled and include 
                    shopping cart data, login status, and security features.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-accent mb-2">Analytics Cookies</h3>
                  <p className="text-sm">
                    Help us understand website usage through Google Analytics. 
                    These are optional and require your consent.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-accent mb-2">Marketing Cookies</h3>
                  <p className="text-sm">
                    Used for targeted advertising through Meta Pixel and TikTok Pixel. 
                    These are optional and require your consent.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-accent mb-2">Affiliate Tracking</h3>
                  <p className="text-sm">
                    Track QR code scans and referral sources for our affiliate program. 
                    These help us calculate commissions accurately.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Managing Your Preferences</h2>
              <ul className="space-y-2 text-sm">
                <li>• Use our cookie consent banner to opt in/out</li>
                <li>• Browser settings can block or delete cookies</li>
                <li>• Some features may not work without necessary cookies</li>
                <li>• Preferences are remembered for future visits</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-sm mb-4">
                Some cookies are set by external services we use:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Google Analytics:</strong> Website traffic analysis</li>
                <li>• <strong>Meta (Facebook):</strong> Social media advertising</li>
                <li>• <strong>TikTok:</strong> Social media advertising</li>
                <li>• <strong>Shopify:</strong> E-commerce functionality</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Cookie Lifespan</h2>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li>• <strong>Persistent cookies:</strong> Remain for up to 30 days</li>
                <li>• <strong>Attribution cookies:</strong> 30 days for affiliate tracking</li>
                <li>• <strong>Consent preferences:</strong> 1 year</li>
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-sm">
                We may update this policy to reflect changes in our practices or legal requirements. 
                Check this page periodically for updates.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-sm">
                Questions about cookies or data privacy? Email us at:{' '}
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