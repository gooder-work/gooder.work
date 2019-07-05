console.log('Do gooder work')

import React from 'react'
import { render, hydrate } from 'react-dom'

import Main from './main'

const main = <Main />
const target = document.getElementById('main')

process.env.NODE_ENV === 'production'
  ? hydrate(main, target)
  : render(main, target)