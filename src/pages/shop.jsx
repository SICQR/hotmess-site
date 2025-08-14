import ProductGrid from '@/components/ProductGrid'
import { shopifyGraphQL } from '@/lib/shopifyClient'

export async function getStaticProps() {
  const data = await shopifyGraphQL(`
    query Products {
      products(first: 24, sortKey: CREATED_AT, reverse: true) {
        nodes {
          id
          title
          handle
          variants(first: 1) { nodes { id title price { amount currencyCode } } }
        }
      }
    }
  `)
  return { props: { products: data.products.nodes }, revalidate: 60 }
}

export default function Shop({ products }) {
  return (
    <main className="container" style={{padding:'48px 0'}}>
      <h1>Shop</h1>
      <ProductGrid products={products} />
    </main>
  )
}