
import Email, { EmailDocument } from '../models/email'
import { emitter } from '../events/emitter'
import { ObjectId } from 'bson'

export const EmailsService = {
  
  create: async (data: EmailDocument) => {
    const email = await Email.create(data)
    emitter.emit('email_created', { email })
    
    return email
  },
}
