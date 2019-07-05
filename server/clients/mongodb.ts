import { MongoClient, ObjectId, Db } from 'mongodb'
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true })
export const db = async ()=> (await client.connect()).db(process.env.MONGO_DB)