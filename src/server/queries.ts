import { PostingsService } from './services/postings'
import { PostingDocument } from './models/posting'

export const queries = {
  get: {
    'postings/:id': ({ id }: { id: string }) => PostingsService.find(id),
    'featured_postings': (params: any) => PostingsService.featured(),
  },
  post: {
    create_posting: (params: any, data: any) => PostingsService.create(data),
  },
}

export const routes = {
  '/postings/:id': [ 'postings/:id' ],
  '/': [ 'featured_postings' ],
}
