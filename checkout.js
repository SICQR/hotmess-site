import { shopifyGraphQL } from '../../lib/shopifyClient'

export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ ok:false, error:'Method not allowed' })
  const { variantId, quantity=1, attributes=[] } = req.body || {}
  if (!variantId) return res.status(400).json({ ok:false, error:'Missing variantId' })
  try {
    const data = await shopifyGraphQL(`
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout { webUrl }
          userErrors { message }
        }
      }
    `, {
      input: {
        lineItems: [{ variantId, quantity: Number(quantity)||1 }],
        customAttributes: attributes
      }
    })
    const url = data.checkoutCreate?.checkout?.webUrl
    if (!url) throw new Error(data.checkoutCreate?.userErrors?.[0]?.message || 'No checkout URL')
    return res.json({ ok:true, url })
  } catch (e) {
    return res.status(500).json({ ok:false, error: e.message })
  }
}
