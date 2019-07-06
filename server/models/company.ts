import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'

export interface CompanyDocument {
  _id?: string
  name: string
  tagline: string
  description: string
}

export default class Company {
  static collection = 'companies'
  static db: Db

  static async list(filters: FilterQuery<CompanyDocument>): Promise<CompanyDocument[]> {
    return this.db.collection(this.collection).find(filters).toArray()
  }

  static async one(_id: ObjectId) {
    return this.db.collection(this.collection).findOne({ _id })
  }

  static async create(data: CompanyDocument): Promise<CompanyDocument> {
    const result = await this.db.collection(this.collection).insertOne({
      created_at: new Date(),
      ...data
    })
    return this.one(result.insertedId)
  }
}

db().then(db => Company.db = db)