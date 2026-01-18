import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const page = defineType({
  name: 'page',
  title: 'Page Content',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page Reference Title',
      type: 'string',
      description: 'Internal title to identify this page (e.g., "Categories Page")',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug/Identifier',
      type: 'slug',
      description: 'Unique identifier for the page (e.g., "categories")',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Main Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image/Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
  ],
})
