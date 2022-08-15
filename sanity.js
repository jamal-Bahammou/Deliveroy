import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const config = {
    dataset: "production",
    projectId: "d80iysnw",
    apiVersion: "2021-10-21",
    useCdn: true
}

// CLIENT FOR FETCHING DATA
const SanityClient = sanityClient(config)

// HELPER FUNCTION FOR GENERATING IMAGE URLs
export const urlFor = source => imageUrlBuilder(config).image(source)

export default SanityClient