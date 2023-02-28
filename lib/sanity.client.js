import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import {cache} from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID // "pv8y60vp"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION // "2022-11-16"

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)

export const clientFetch = cache(client.fetch.bind(client))