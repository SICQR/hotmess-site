import ProductDetail from '@/components/ProductDetail'
import { shopifyGraphQL } from '@/lib/shopifyClient'

export async function getStaticPaths() {
  const data = await shopifyGraphQL(`query{ products(first: 20) { nodes { handle } } }`)
  const paths = data.products.nodes.map(p => ({ params: { handle: p.handle }}))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const data = await shopifyGraphQL(`
    query Product($handle: String!) {
      product(handle: $handle) {
        id title descriptionHtml
        variants(first: 50) { nodes { id title availableForSale price { amount currencyCode } } }
      }
    }`, { handle: params.handle })
  if (!data.product) return { notFound: true }
  return { props: { product: data.product }, revalidate: 60 }
}  

export default function ProductPage({ product }) {
  return (
    <main className="container" style={{padding:'48px 0'}}>
      <ProductDetail product={product} />
    </main>
  )
}