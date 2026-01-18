import { defineField, defineType } from 'sanity'
import { TrolleyIcon } from '@sanity/icons'

export const wholesale = defineType({
  name: 'wholesale',
  title: 'Wholesale Page',
  type: 'document',
  icon: TrolleyIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Main Heading (H1)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
    }),
    defineField({
      name: 'features',
      title: 'Wholesale Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Feature Title' },
            { name: 'desc', type: 'text', title: 'Feature Description' }
          ]
        }
      ]
    }),
    // You could also make the MOQ and Shipping sections dynamic if needed, but the user specifically asked for the top part and features.
  ],
})
