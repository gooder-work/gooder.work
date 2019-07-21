import { PostingsService } from './services/postings'
import { PostingDocument } from './models/posting'
import { CompaniesService } from './services/companies'
import { EmailsService } from './services/emails'

export const queries = {
  get: {
    'companies/:id': ({ id }: { id: string }) => CompaniesService.find(id),
    'postings/:id': ({ id }: { id: string }) => PostingsService.find(id),
    'featured_postings': (params: any) => PostingsService.featured(),
  },
  post: {
    notification_signup: (params: any, data: any) => EmailsService.create(data),
    create_posting: (params: any, data: any) => PostingsService.create(data),
    create_company: (params: any, data: any) => CompaniesService.create(data),
  },
}

export const routes = {
  '/companies/:id': [ 'companies/:id' ],
  '/postings/:id': [ 'postings/:id' ],
  '/': [ 'featured_postings' ],
}
