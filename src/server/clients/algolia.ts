import algoliasearch from 'algoliasearch'
import { PostingDocument } from '../models/posting'

export const search = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_KEY)
export const postingsIndex = search.initIndex('postings')
export const searchPostings = (query: string): Promise<PostingDocument[]> => {
  const promise = new Promise<PostingDocument[]>(resolve => {
    postingsIndex.search(query, (err, { hits }) => {
      resolve(hits.map(hit => ({
        ...hit,
        _id: hit.objectID,
      })))
    })
  })

  return promise
}

