import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'
import { shopifyGraphQL } from '../lib/shopifyClient'

export async function getStaticProps(){
  const data = await shopifyGraphQL(`
    query Products {
      products(first: 20) {
        nodes {
          id
          title
          handle
          featuredImage { url altText }
          variants(first: 5) { nodes { id title price { amount currencyCode } } }
        }
      }
    }
  `)
  return { props: { products: data.products.nodes }, revalidate: 60 }
}

export default function Shop({ products }){
  return (
    <>
      <Head><title>Shop — HOTMESS London</title></Head>
      <Navbar />
      <section className="section">
        <div className="container">
          <h2>Shop</h2>
          <ProductGrid products={products} />
        </div>
      </section>
      <Footer />
    </>
  )
}
