import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { page } from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, page],
}
