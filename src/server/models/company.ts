import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'
import { PostingDocument } from './posting'

export interface CompanyDocument {
  _id?: string
  name: string
  tagline: string
  description: string
  open_postings: PostingDocument[]
  domain: string
  logo: string
}

export default class Company {
  public static collection = 'companies'
  public static db: Db

  public static async list(filters: FilterQuery<CompanyDocument>): Promise<CompanyDocument[]> {
    return this.db.collection(this.collection).find(filters).toArray()
  }

  public static async one(id: ObjectId) {
    return this.db.collection(this.collection).findOne({ _id: id })
  }

  public static async create(data: CompanyDocument): Promise<CompanyDocument> {
    const result = await this.db.collection(this.collection).insertOne({
      created_at: new Date(),
      ...data,
    })
    return this.one(result.insertedId)
  }
}

db().then(database => Company.db = database)
