import { PostingsService } from './services/postings'
import { PostingDocument } from './models/posting'

export const queries: {
  [method: string]: {
    [endpoint: string]: (params: any, data?: any) => Promise<any>
  }
} = {
  get: {
    featured_postings: (params: any) => PostingsService.featured(),
  },
  post: {
    create_posting: (params: any, data: any) => PostingsService.create(data),
  },
}

export const routes = {
  '/': [ 'featured_postings' ],
}
