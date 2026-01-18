import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Used for short descriptions in cards/grids.'
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    // SEO & Page Content Fields
    defineField({
        name: 'metaTitle',
        title: 'Meta Title',
        type: 'string',
        description: 'Browser tab title (SEO)',
    }),
    defineField({
        name: 'metaDescription',
        title: 'Meta Description',
        type: 'text',
        description: 'SEO description',
    }),
    defineField({
        name: 'pageHeading',
        title: 'Page Heading (H1)',
        type: 'string',
        description: 'Main heading on the category page',
    }),
    defineField({
        name: 'pageSubheading',
        title: 'Page Subheading (H2)',
        type: 'string',
    }),
    defineField({
        name: 'pageContent',
        title: 'Page Content',
        type: 'text',
        description: 'Main text content for the category page'
    }),
    defineField({
        name: 'ctaText',
        title: 'CTA Button Text',
        type: 'string',
    }),
  ],
})
