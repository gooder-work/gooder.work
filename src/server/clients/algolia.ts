import algoliasearch from 'algoliasearch/lite'

export const search = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_KEY)
