import { useEffect, useState } from 'react'
import { getProducts } from '@/lib/shopify'

export default function ProductGrid(){
  const [items,setItems]=useState([])
  const [err,setErr]=useState(null)

  useEffect(()=>{
    getProducts(8).then(setItems).catch(e=>setErr(e.message))
  },[])

  if(err) return <div className="card">Shop offline for a sec: {err}</div>

  return (
    <div className="grid">
      {items.map(p=>(
        <a key={p.id} className="card" href={`https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}/products/${p.handle}`} target="_blank" rel="noreferrer">
          <img src={p.featuredImage?.url} alt={p.featuredImage?.altText||p.title} style={{width:'100%',borderRadius:'8px'}}/>
          <div style={{marginTop:8, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <strong>{p.title}</strong>
            <span>{Number(p.priceRange.minVariantPrice.amount).toFixed(2)} {p.priceRange.minVariantPrice.currencyCode}</span>
          </div>
        </a>
      ))}
    </div>
  )
}