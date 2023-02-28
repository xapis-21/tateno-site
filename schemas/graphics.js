import {defineField, defineType} from 'sanity'
import {SiMaterialdesignicons as icon} from 'react-icons/si'

export default defineType({
  name: 'graphics',
  title: 'Graphics Design',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'cover',
    },

  },
})
