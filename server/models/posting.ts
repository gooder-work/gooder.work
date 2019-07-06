import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'
import { CompanyDocument } from './company';

export interface PostingDocument {
  _id?: string
  title: string
  company: CompanyDocument[]
}

export default class Posting {
  static collection = 'postings'
  static db: Db

  static async list(filters: FilterQuery<PostingDocument>): Promise<PostingDocument[]> {
    const match = {
      $match: filters
    }

    const lookup  = {
      $lookup: {
        from: 'companies',
        localField: 'company_id',
        foreignField: '_id',
        as: 'company',
      },
    }

    return this.db.collection(this.collection).aggregate([match, lookup]).toArray()
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