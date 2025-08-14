import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ProductDetail from '../../components/ProductDetail'
import { shopifyGraphQL } from '../../lib/shopifyClient'

export async function getStaticPaths(){
  const data = await shopifyGraphQL(`
    query {
      products(first: 10) { nodes { handle } }
    }
  `)
  const paths = data.products.nodes.map(p=>({ params: { handle: p.handle }}))
  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }){
  const data = await shopifyGraphQL(`
    query Product($handle: String!) {
      product(handle: $handle) {
        id title descriptionHtml
        images(first: 10) { nodes { url altText } }
        variants(first: 25) { nodes { id title availableForSale price { amount currencyCode } } }
      }
    }
  `, { handle: params.handle })
  if (!data.product) return { notFound: true }
  return { props: { product: data.product }, revalidate: 60 }
}

export default function ProductPage({ product }){
  return (
    <>
      <Head>
        <title>{product.title} — HOTMESS</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"Product",
          "name": product.title,
          "image": (product.images?.nodes||[]).map(i=>i.url),
          "description": product.seo?.description || product.title,
          "offers": {
            "@type":"Offer",
            "priceCurrency": product.variants?.nodes?.[0]?.price?.currencyCode || "GBP",
            "price": product.variants?.nodes?.[0]?.price?.amount || "",
            "availability": "https://schema.org/InStock"
          }
        })}} />
      </Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <ProductDetail product={product} />
        </div>
      </section>
      <Footer />
    </>
  )
}
