import { NextRequest, NextResponse } from 'next/server'
import productsData from '../../../data/products.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase() || ''
  const collection = searchParams.get('collection')?.toUpperCase()
  const maxPrice = searchParams.get('maxPrice')
  const minPrice = searchParams.get('minPrice')

  if (!query && !collection && !maxPrice && !minPrice) {
    return NextResponse.json({ products: productsData, total: productsData.length })
  }

  let filteredProducts = productsData

  // Filter by search query (title, description, tags)
  if (query) {
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.tags.some(tag => tag.toLowerCase().includes(query)) ||
      product.collection.toLowerCase().includes(query)
    )
  }

  // Filter by collection
  if (collection) {
    filteredProducts = filteredProducts.filter(product => 
      product.collection.toUpperCase() === collection
    )
  }

  // Filter by price range
  if (minPrice) {
    const min = parseFloat(minPrice)
    filteredProducts = filteredProducts.filter(product => product.price >= min)
  }

  if (maxPrice) {
    const max = parseFloat(maxPrice)
    filteredProducts = filteredProducts.filter(product => product.price <= max)
  }

  return NextResponse.json({ 
    products: filteredProducts, 
    total: filteredProducts.length,
    query: {
      search: query,
      collection,
      minPrice,
      maxPrice
    }
  })
}