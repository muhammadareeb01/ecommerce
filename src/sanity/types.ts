import { type SanityDocument } from 'next-sanity'

// Generic page content type
export interface PageContent extends SanityDocument {
  _type: 'page'
  title: string
  slug: { current: string }
  heading: string
  description: string
  mainImage?: {
    asset: {
      _ref: string
    }
    alt: string
  }
}

// Product category type
export interface Category extends SanityDocument {
  _type: 'category'
  title: string
  slug: { current: string }
  description: string
  image?: {
    asset: {
      _ref: string
    }
  }
}

// Product type
export interface Product extends SanityDocument {
  _type: 'product'
  name: string
  slug: { current: string }
  description: string
  price: number
  salePrice?: number
  image?: {
    asset: {
      _ref: string
    }
    alt: string
  }
  category: {
    _ref: string
    _type: 'reference'
  }
  isNew?: boolean
  inStock?: boolean
}
