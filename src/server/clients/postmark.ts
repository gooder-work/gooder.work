import { ServerClient } from 'postmark'

export const postmark = new ServerClient(process.env.POSTMARK_KEY)
export const sendEmail = (to: string, subject: string, body: string) => {
  return postmark.sendEmail({
    From: 'phil@phils.computer',
    To: to,
    Subject: subject,
    TextBody: body,
  })
}
