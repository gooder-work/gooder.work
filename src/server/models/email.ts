import { FilterQuery, ObjectId, Db } from 'mongodb'

import { db } from '../clients/mongodb'

export interface EmailDocument {
  _id?: string
  email: string
}

export default class Email {
  public static collection = 'emails'
  public static db: Db

  public static async create(data: EmailDocument): Promise<{ _id: ObjectId }> {
    return {
      _id: (await this.db.collection(this.collection).insertOne({
        created_at: new Date(),
        ...data,
      })).insertedId,
    }
  }
}

db().then(database => Email.db = database)
