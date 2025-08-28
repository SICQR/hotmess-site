'use client'

import { Suspense } from 'react'
import { usePageTracking } from '../hooks/usePageTracking'

function PageTracker() {
  usePageTracking()
  return null
}

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  return (
    <>
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>
      {children}
    </>
  )
}