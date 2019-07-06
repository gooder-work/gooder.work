
import Posting, { PostingDocument } from '../models/posting'
import { emitter } from '../events/emitter'

export function featuredPostings(): Promise<PostingDocument[]> {
  return Posting.list({ featured: true })
}

export async function createPosting(data: PostingDocument): Promise<PostingDocument> {
  const posting = await Posting.create(data)
  emitter.emit('posting_created', { posting })
  
  return posting
}
