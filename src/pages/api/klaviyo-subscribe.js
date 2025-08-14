export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false })
  const { email } = req.body || {}
  if (!email) return res.status(400).json({ ok:false, error:'Missing email' })

  const API_KEY = process.env.KLAVIYO_API_KEY
  const LIST_ID = process.env.KLAVIYO_LIST_ID
  const MAKE    = process.env.MAKE_WEBHOOK_URL

  // First try Klaviyo List v2 for speed
  if (API_KEY && LIST_ID) {
    try {
      const r = await fetch(`https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ api_key: API_KEY, profiles: [{ email }] })
      })
      if (!r.ok) throw new Error('Klaviyo error')
      return res.json({ ok:true, via:'klaviyo' })
    } catch (e) {
      // fall through to Make
    }
  }

  if (MAKE) {
    try {
      const r = await fetch(MAKE, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) })
      if (!r.ok) throw new Error('Make.com error')
      return res.json({ ok:true, via:'make' })
    } catch (e) {
      return res.status(500).json({ ok:false, error: e.message })
    }
  }

  // If neither configured, succeed no-op so UI isn't blocked
  return res.json({ ok:true, via:'noop' })
}