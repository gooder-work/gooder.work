import Agenda from 'agenda'
import { EmailsService } from './server/services/emails'

const agenda = new Agenda({ db: {
  address: process.env.MONGO_URI,
  collection: 'agenda',
  options: { useNewUrlParser: true },
}})


agenda.define('email new postings', async (job, done) => {
  // tslint:disable-next-line: no-console
  console.log('email new postings')
  EmailsService.emailNewPostingResults()
  done()
})


const start = async () => {
  await agenda.start()
  await agenda.every('5 seconds', 'email new postings')
}

start()


async function graceful() {
  await agenda.stop()
  process.exit(0)
}

process.on('SIGUSR2', graceful)
process.on('SIGTERM', graceful)
process.on('SIGINT' , graceful)
