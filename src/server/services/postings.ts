
import Posting, { PostingDocument } from '../models/posting'
import { emitter } from '../events/emitter'

export const PostingsService = {
  featured: () => Posting.list({ featured: true }),
  create: async (data: PostingDocument) => {
    const posting = await Posting.create(data)
    emitter.emit('posting_created', { posting })
    
    return posting
  },
}
