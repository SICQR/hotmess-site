// Cookie utilities for HOTMESS site
export interface CookieOptions {
  expires?: number | Date
  path?: string
  domain?: string
  secure?: boolean
  sameSite?: 'Strict' | 'Lax' | 'None'
}

export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  if (typeof document === 'undefined') return

  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  if (options.expires) {
    if (typeof options.expires === 'number') {
      const date = new Date()
      date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000))
      cookieString += `; expires=${date.toUTCString()}`
    } else {
      cookieString += `; expires=${options.expires.toUTCString()}`
    }
  }

  if (options.path) {
    cookieString += `; path=${options.path}`
  }

  if (options.domain) {
    cookieString += `; domain=${options.domain}`
  }

  if (options.secure) {
    cookieString += '; secure'
  }

  if (options.sameSite) {
    cookieString += `; samesite=${options.sameSite}`
  }

  document.cookie = cookieString
}

export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null

  const nameEQ = encodeURIComponent(name) + '='
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1, cookie.length)
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length))
    }
  }

  return null
}

export function deleteCookie(name: string, options: Omit<CookieOptions, 'expires'> = {}): void {
  setCookie(name, '', { ...options, expires: -1 })
}