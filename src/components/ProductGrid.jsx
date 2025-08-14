import Link from 'next/link'

export default function ProductGrid({ products = [] }) {
  if (!products?.length) return <p className="small">No products yet.</p>
  return (
    <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))'}}>
      {products.map(p => {
        const price = p.variants?.nodes?.[0]?.price?.amount
        return (
          <Link key={p.id} href={`/product/${p.handle}`} style={{border:'1px solid rgba(255,255,255,.12)',borderRadius:12,padding:12,display:'block'}}>
            <div style={{fontWeight:800}}>{p.title}</div>
            <div className="small">£{price ?? '—'}</div>
          </Link>
        )
      })}
    </div>
  )
}