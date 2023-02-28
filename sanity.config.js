import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export default defineConfig({
  basePath: "/studio",
  name: 'TATENO_Sudio',
  title: 'TATENO STUDIO',

  projectId,
  dataset,

  plugins: [
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
