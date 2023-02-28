import {defineField, defineType} from 'sanity'
import {BiCodeAlt as icon} from 'react-icons/bi'

export default defineType({
  name: 'webdesign',
  title: 'Web Design',
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
