import { FilterQuery, ObjectId } from 'mongodb'

import { db } from '../clients/mongodb'

export interface PostingDocument {
  _id?: string
  title: string
}

export default class Posting {
  static collection = 'postings'

  static async list(filters: FilterQuery<PostingDocument>): Promise<PostingDocument[]> {
    return (await db()).collection(this.collection).find(filters).toArray()
  }

  static async one(_id: ObjectId) {
    return (await db()).collection(this.collection).findOne({ _id })
  }

  static async create(data: PostingDocument): Promise<PostingDocument> {
    const collection = (await db()).collection(this.collection)
    const result = await collection.insertOne({
      created_at: new Date(),
      ...data
    })
    return this.one(result.insertedId)
  }
}