import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'

export interface EmailDocument {
  _id?: string
  email: string
  query: string
  sent: {[id: string]: Date}
}

export default class Email {
  public static collection = 'emails'
  public static db: Db

  public static async list(filters: FilterQuery<EmailDocument>): Promise<EmailDocument[]> {
    return this.db.collection(this.collection).find(filters).toArray()
  }

  public static async create(data: EmailDocument): Promise<{ _id: ObjectId }> {
    return {
      _id: (await this.db.collection(this.collection).insertOne({
        created_at: new Date(),
        ...data,
      })).insertedId,
    }
  }

  public static async update(id: ObjectId, data: any): Promise<EmailDocument> {
    return (await this.db.collection<EmailDocument>(this.collection).findOneAndUpdate(
      { _id: id },
      { $set: data },
      { returnOriginal: false })).value
  }
}

db().then(database => Email.db = database)
