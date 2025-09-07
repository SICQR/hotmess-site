'use client'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'

function AgeVerificationContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const returnUrl = searchParams.get('return') || '/'

  const handleAgeVerification = (isOver18: boolean) => {
    if (isOver18) {
      // Set both localStorage and prepare for cookie setting
      localStorage.setItem('age_verified', 'true')
      
      // Set age verification cookie via API call
      fetch('/api/verify-age', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verified: true })
      }).then(() => {
        // Redirect to the return URL or home
        router.push(returnUrl)
      }).catch(() => {
        // Fallback - still redirect but without server cookie
        router.push(returnUrl)
      })
    } else {
      // Redirect to home page for under 18
      router.push('/')
    }
  }
  return (
    <>
      <Header />
      
      <section className="scroll-section min-h-screen flex items-center justify-center">
        <div className="container max-w-2xl text-center">
          <div className="card p-12">
            <h1 className="mb-8">Age Verification</h1>
            
            <div className="text-6xl mb-8">🔞</div>
            
            <p className="text-lg mb-8">
              Some areas of HOTMESS London contain adult content and require age verification.
            </p>
            
            <div className="space-y-4 text-sm text-left mb-8">
              <h3 className="text-lg font-bold text-center mb-4">Areas Requiring Verification:</h3>
              <ul className="space-y-2">
                <li>• Community "After Dark" Telegram room</li>
                <li>• Certain product categories (intimate items)</li>
                <li>• Adult-oriented events and content</li>
                <li>• Age-restricted collaborations</li>
              </ul>
            </div>
            
            <div className="bg-yellow-500/10 p-6 rounded mb-8">
              <h4 className="font-bold mb-3">Verification Process</h4>
              <div className="text-sm text-left space-y-2">
                <p>For Telegram community access:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Send photo ID to community moderators</li>
                  <li>IDs are verified and immediately deleted</li>
                  <li>Only birth date verification is recorded</li>
                  <li>No personal information is stored</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleAgeVerification(false)}
                className="btn btn-secondary"
              >
                I'm Under 18
              </button>
              <button 
                onClick={() => handleAgeVerification(true)}
                className="btn btn-primary"
              >
                I'm 18 or Older
              </button>
            </div>
            
            <p className="text-xs opacity-75 mt-8">
              By clicking "I'm 18 or Older" you confirm that you are of legal age 
              to view adult content in your jurisdiction.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default function AgeVerificationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔞</div>
          <p>Loading age verification...</p>
        </div>
      </div>
    }>
      <AgeVerificationContent />
    </Suspense>
  )
}