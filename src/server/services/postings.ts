
import { ObjectId } from 'bson'
import { emitter } from '../events/emitter'

import Posting, { PostingDocument } from '../models/posting'
import Company from '../models/company'

export const PostingsService = {
  featured: () => Posting.list({ featured: true }),
  find: async (id: string) => {
    const posting = await Posting.one(new ObjectId(id))

    return {
      ...posting,
      company: await Company.one(new ObjectId(posting.company_id)),
    }
  },
  
  create: async (data: PostingDocument) => {
    const posting = await Posting.create(data)
    emitter.emit('posting_created', { posting })
    
    return posting
  },
}
