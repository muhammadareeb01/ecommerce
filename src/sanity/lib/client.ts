import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '../env'

// IMPORTANT → API token (required for writing/updating data)
export const token = process.env.SANITY_API_TOKEN

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token, // gives write/update permissions
  perspective: 'published',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
