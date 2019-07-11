import { ObjectId } from 'bson'

import { emitter } from '../events/emitter'

import Posting, { PostingDocument } from '../models/posting'
import Company, { CompanyDocument } from '../models/company'


export const CompaniesService = {
  featured: () => Posting.list({ featured: true }),
  find: async (id: string) => {
    const companyId = new ObjectId(id)
    const company = await Company.one(companyId)
    const postings = await Posting.list({ company_id: companyId })
    return {
      ...company,
      postings,
    }
  },
  
  create: async (data: CompanyDocument) => {
    const company = await Company.create(data)
    emitter.emit('company_created', { company })
    
    return company
  },
}
