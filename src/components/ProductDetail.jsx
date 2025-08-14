import { useState } from 'react'
import { getAttribution } from '@/lib/attribution'

export default function ProductDetail({ product }) {
  const [variantId, setVariantId] = useState(product?.variants?.nodes?.[0]?.id)
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  async function buyNow() {
    setLoading(true); setErr('')
    try {
      const attrib = getAttribution()
      const r = await fetch('/api/checkout', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({
          variantId, quantity: qty,
          attributes: Object.entries(attrib).map(([key, value]) => ({ key, value }))
        })
      })
      const j = await r.json()
      if (!j.ok) throw new Error(j.error || 'Checkout error')
      window.location.href = j.url
    } catch (e) {
      setErr(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="stack">
      <h1>{product.title}</h1>
      <div className="small" dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
      <label className="small">Variant</label>
      <select value={variantId} onChange={e=>setVariantId(e.target.value)}>
        {(product.variants?.nodes||[]).map(v=>(<option key={v.id} value={v.id} disabled={!v.availableForSale}>
          {v.title} — £{v.price?.amount}{!v.availableForSale?' (Sold out)':''}
        </option>))}  
      </select>
      <label className="small">Quantity</label>
      <input type="number" min="1" value={qty} onChange={e=>setQty(parseInt(e.target.value||'1'))} />
      <button className="btn primary" onClick={buyNow} disabled={loading}>
        {loading ? 'Loading…' : 'Buy Now'}
      </button>
      {err && <p className="small" style={{color:'#f88'}}>{err}</p>}
    </div>
  )
}