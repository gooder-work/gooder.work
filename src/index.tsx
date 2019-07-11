// tslint:disable-next-line: no-console
console.log('Do gooder work')

import React from 'react'
import { render, hydrate } from 'react-dom'

import Main from './main'

declare global {
  interface Window {
    responses: { [endpoint: string]: any }
  }
}

const main = <Main responses={window.responses} />
const target = document.getElementById('main')

process.env.NODE_ENV === 'production'
  ? hydrate(main, target)
  : render(main, target)
