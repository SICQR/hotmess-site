export async function shopifyGraphQL(query, variables={}) {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
  const version = process.env.SHOPIFY_API_VERSION || '2024-07';
  if (!domain || !token) {
    throw new Error('Missing Shopify env vars');
  }
  const endpoint = `https://${domain}/api/${version}/graphql.json`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': token
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Shopify GraphQL error');
  }
  return json.data;
}
