import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'
import { CompanyDocument } from './company';

export interface PostingDocument {
  _id?: string
  title: string
  city: string
  company: CompanyDocument
}

export default class Posting {
  public static collection = 'postings'
  public static db: Db

  public static async list(filters: FilterQuery<PostingDocument>): Promise<PostingDocument[]> {
    const match = {
      $match: filters,
    }

    const lookup  = {
      $lookup: {
        from: 'companies',
        localField: 'company_id',
        foreignField: '_id',
        as: 'company',
      },
    }

    const companyUnwind = {
      $unwind: {
        path: '$company',
        includeArrayIndex: '0',
        preserveNullAndEmptyArrays: false,
      },
    }

    return this.db.collection(this.collection).aggregate([match, lookup, companyUnwind]).toArray()
  }

  public static async one(id: ObjectId) {
    return this.db.collection(this.collection).findOne({ _id: id })
  }

  public static async create(data: PostingDocument): Promise<PostingDocument> {
    const result = await this.db.collection(this.collection).insertOne({
      created_at: new Date(),
      ...data,
    })
    return this.one(result.insertedId)
  }
}

db().then(database => Posting.db = database)
