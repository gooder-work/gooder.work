import { ObjectId } from 'bson'

import Email, { EmailDocument } from '../models/email'
import { PostingDocument } from '../models/posting'
import { emitter } from '../events/emitter'

import { searchPostings } from '../clients/algolia'
import { sendEmail } from '../clients/postmark'


export const EmailsService = {
  
  create: async (data: EmailDocument) => {
    const email = await Email.create(data)
    emitter.emit('email_created', { email })
    
    return email
  },

  emailNewPostingResults: async () => {
    const emails = await Email.list({})
    emails.forEach(async email => {
      const postings = (await searchPostings(email.query)).filter(posting => !email.sent || !email.sent[posting._id])

      if (postings.length) {
        await sendEmail(email.email, `New ${email.query} postings`, JSON.stringify(postings))

        Email.update(new ObjectId(email._id), postings.reduce<{ [id: string]: Date }>((dates, posting) => {
          return {
            ...dates,
            [`sent.${posting._id}`]: new Date(),
          }
        }, {}))

        emitter.emit('new_postings_email_sent', { email, postings })
      }
    })
  },
}
