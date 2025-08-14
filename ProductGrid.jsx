import Link from 'next/link'
import Image from 'next/image'

export default function ProductGrid({ products=[] }){
  return (
    <div className="grid grid-3">
      {products.map(p=>{
        const img = p.featuredImage?.url || p.images?.nodes?.[0]?.url
        const price = p.variants?.nodes?.[0]?.price?.amount
        return (
          <Link key={p.id} href={`/product/${p.handle}`} className="card">
            {img && <Image src={img} alt={p.title} width={800} height={1000} />}
            <div className="inner">
              <h3>{p.title}</h3>
              <div className="price">£{price ?? '—'}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
