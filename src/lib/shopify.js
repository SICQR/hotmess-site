import fetch from 'cross-fetch'

const SHOP_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const API_TOKEN   = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2024-07'

const endpoint = `https://${SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`

async function shopify(query, variables = {}) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'X-Shopify-Storefront-Access-Token': API_TOKEN
    },
    body: JSON.stringify({ query, variables })
  })
  const json = await res.json()
  if (json.errors) throw new Error(JSON.stringify(json.errors))
  return json.data
}

export async function getProducts(limit = 12) {
  const q = `
    query($limit:Int!){
      products(first:$limit, sortKey:CREATED_AT, reverse:true){
        edges{
          node{
            id handle title
            featuredImage{ url altText }
            priceRange{ minVariantPrice{ amount currencyCode } }
          }
        }
      }
    }
  `
  const data = await shopify(q,{limit})
  return data.products.edges.map(e => e.node)
}