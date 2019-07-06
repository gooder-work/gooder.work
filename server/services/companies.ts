
import Posting, { PostingDocument } from '../models/posting'
import { emitter } from '../events/emitter'
import Company, { CompanyDocument } from '../models/company';
import { ObjectId } from 'bson';

export async function getCompany(_id: string): Promise<CompanyDocument> {
  const company_id = new ObjectId(_id)
  const company = await Company.one(company_id)
  const postings = await Posting.list({ company_id })
  return {
    ...company,
    postings
  }
}

export async function createCompany(data: CompanyDocument): Promise<CompanyDocument> {
  const company = await Company.create(data)
  emitter.emit('company_created', { company })
  
  return company
}
