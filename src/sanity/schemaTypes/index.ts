import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { page } from './page'
import { faq } from './faq'
import { settings } from './settings'
import { wholesale } from './wholesale'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, page, faq, settings, wholesale],
}
