import { PostingsService } from './services/postings'
import { PostingDocument } from './models/posting'

export const queries = {
  get: {
    featured_postings: () => PostingsService.featured(),
  },
  post: {
    create_posting: (data: PostingDocument) => PostingsService.create(data),
  },
}
