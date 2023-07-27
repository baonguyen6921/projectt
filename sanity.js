import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

    const client = createClient({
        projectId: '9q6gf1g0',
        dataset: 'production',
        useCdn: true, // set to `false` to bypass the edge cache
        apiVersion: '2021-10-21',

    })

    const builder = imageUrlBuilder(client);

    export const urlFor = soure => builder.image(soure)

export default client
