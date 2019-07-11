
import Posting, { PostingDocument } from '../models/posting'
import { emitter } from '../events/emitter'
import { ObjectId } from 'bson'

export const PostingsService = {
  featured: () => Posting.list({ featured: true }),
  find: (id: string) => Posting.one(new ObjectId(id)),
  
  create: async (data: PostingDocument) => {
    const posting = await Posting.create(data)
    emitter.emit('posting_created', { posting })
    
    return posting
  },
}
