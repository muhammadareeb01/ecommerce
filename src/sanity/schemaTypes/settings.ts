import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
        })
      ]
    }),
  ],
})
