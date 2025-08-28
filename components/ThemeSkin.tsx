'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// Routes that use White Editorial theme
const WHITE_EDITORIAL_ROUTES = ['/shop', '/lookbook']

// Routes that use Black Neon theme  
const BLACK_NEON_ROUTES = ['/radio', '/hand-in-hand', '/drop', '/label', '/rooms', '/affiliate']

function getDaypart() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'am'
  if (hour >= 12 && hour < 20) return 'pm' 
  return 'night'
}

export function ThemeSkin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [daypart, setDaypart] = useState('night')
  
  useEffect(() => {
    setDaypart(getDaypart())
    
    // Update daypart every hour
    const interval = setInterval(() => {
      setDaypart(getDaypart())
    }, 60 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  const isWhiteEditorial = WHITE_EDITORIAL_ROUTES.some(route => 
    pathname.startsWith(route)
  )
  
  const themeClass = isWhiteEditorial 
    ? 'theme-white-editorial' 
    : `theme-black-neon daypart-${daypart}`
  
  return (
    <div className={themeClass} style={{ minHeight: '100vh' }}>
      {children}
    </div>
  )
}