import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'

export interface PostingDocument {
  _id?: string
  title: string
}

export default class Posting {
  static collection = 'postings'
  static db: Db

  static async list(filters: FilterQuery<PostingDocument>): Promise<PostingDocument[]> {
    return this.db.collection(this.collection).find(filters).toArray()
  }

  static async one(_id: ObjectId) {
    return this.db.collection(this.collection).findOne({ _id })
  }

  static async create(data: PostingDocument): Promise<PostingDocument> {
    const result = await this.db.collection(this.collection).insertOne({
      created_at: new Date(),
      ...data
    })
    return this.one(result.insertedId)
  }
}

db().then(db => Posting.db = db)