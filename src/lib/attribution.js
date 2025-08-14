export function captureAttribution() {
  if (typeof window === 'undefined') return
  const url = new URL(window.location.href)
  const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref','qr']
  const picked = Object.fromEntries(keys.map(k=>[k, url.searchParams.get(k)]).filter(([,v])=>!!v))
  const existing = JSON.parse(localStorage.getItem('hm_attrib')||'{}')
  const saved = { ...existing, ...picked, ts: Date.now() }
  localStorage.setItem('hm_attrib', JSON.stringify(saved))
  return saved
}
export function getAttribution() {
  if (typeof window === 'undefined') return {}
  try { return JSON.parse(localStorage.getItem('hm_attrib')||'{}') } catch { return {} }
}