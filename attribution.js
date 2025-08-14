import Cookies from 'js-cookie'

const ATTR_KEYS = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref','qr'];

export function captureAttribution() {
  if (typeof window === 'undefined') return;
  const url = new URL(window.location.href);
  const attrs = {};
  ATTR_KEYS.forEach(k=> {
    const v = url.searchParams.get(k);
    if (v) { attrs[k]=v; }
  });
  const existing = JSON.parse(localStorage.getItem('hm_attrib')||'{}');
  const saved = { ...existing, ...attrs, ts: Date.now() };
  localStorage.setItem('hm_attrib', JSON.stringify(saved));
  Cookies.set('hm_attrib', JSON.stringify(saved), { expires: 30, sameSite: 'Lax' });
  return saved;
}

export function getAttribution() {
  if (typeof window === 'undefined') return {};
  try {
    const a = localStorage.getItem('hm_attrib') || Cookies.get('hm_attrib') || '{}';
    return JSON.parse(a);
  } catch { return {}; }
}
