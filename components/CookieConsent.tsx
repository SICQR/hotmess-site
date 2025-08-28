'use client'

import { useState, useEffect } from 'react'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('hm_cookie_consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const newPrefs = { necessary: true, analytics: true, marketing: true }
    savePreferences(newPrefs)
  }

  const acceptNecessary = () => {
    const newPrefs = { necessary: true, analytics: false, marketing: false }
    savePreferences(newPrefs)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem('hm_cookie_consent', 'accepted')
    localStorage.setItem('hm_cookie_prefs', JSON.stringify(prefs))
    setPreferences(prefs)
    setShowBanner(false)
    
    // Trigger update for analytics
    window.dispatchEvent(new CustomEvent('hm_cc_update'))
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 p-6 z-50">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-display font-bold mb-2">Cookie Consent</h3>
            <p className="text-sm opacity-85">
              We use cookies for analytics and marketing to improve your experience. 
              You can manage your preferences anytime.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={acceptNecessary}
              className="btn btn-secondary text-sm"
            >
              Necessary Only
            </button>
            <button
              onClick={acceptAll}
              className="btn btn-primary text-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}