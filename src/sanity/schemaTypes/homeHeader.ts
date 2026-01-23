import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homeHeader = defineType({
  name: 'homeHeader',
  title: 'Home Header',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Example: Bulk Vapes Wholesale in the USA – Buy Disposable Vapes in Bulk & Save More',
    }),
    defineField({
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
      description: 'Example: Buy Bulk Vapes Online from a Trusted USA Wholesale Supplier',
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      return {
        ...selection,
        title: selection.title || 'Home Header Content',
      }
    },
  },
})
