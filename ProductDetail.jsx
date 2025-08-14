import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getAttribution } from '../lib/attribution'

export default function ProductDetail({ product }){
  const [variantId, setVariantId] = useState(product?.variants?.nodes?.[0]?.id)
  const [qty, setQty] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleBuy(){
    setLoading(true); setError('')
    try {
      const attrib = getAttribution()
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({
          variantId, quantity: qty,
          attributes: Object.entries(attrib).map(([key, value]) => ({ key, value }))
        })
      })
      const json = await res.json()
      if (!json.ok) throw new Error(json.error || 'Checkout error')
      window.location.href = json.url
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-2">
      <div>
        {(product.images?.nodes || []).map((img, i)=>(
          <div key={i} className="card" style={{marginBottom:'1rem'}}>
            <Image src={img.url} alt={img.altText || product.title} width={1200} height={1400} />
          </div>
        ))}
      </div>
      <div>
        <h1>{product.title}</h1>
        <div className="small" dangerouslySetInnerHTML={{__html: product.descriptionHtml}} />
        <label className="small">Variant</label>
        <select value={variantId} onChange={e=>setVariantId(e.target.value)} style={{display:'block', padding:'.6rem', margin:'0.5rem 0 1rem 0', width:'100%'}}>
          {(product.variants?.nodes||[]).map(v=>(
            <option key={v.id} value={v.id} disabled={!v.availableForSale}>
              {v.title} — £{v.price?.amount}{!v.availableForSale?' (Sold out)':''}
            </option>
          ))}
        </select>
        <label className="small">Quantity</label>
        <input type="number" min="1" value={qty} onChange={e=>setQty(parseInt(e.target.value||'1'))} style={{padding:'.6rem', width:'100%', marginBottom:'1rem'}} />
        <button className="btn btn-primary" onClick={handleBuy} disabled={loading}>
          {loading? 'Loading…' : 'Buy Now'}
        </button>
        {error && <p className="small" style={{color:'#f88'}}>{error}</p>}
      </div>
    </div>
  )
}
