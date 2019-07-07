import express from 'express'
import { Application, Request, Response } from 'express'
import cors from 'cors'
import compression from 'compression'
import { json, raw } from 'body-parser'

import React from 'react'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { oneLine } from 'common-tags'

import { GlobalStyle, Theme } from './styles'
import { Routes } from './routes'

import { Header } from './components/header'
import { Footer } from './components/footer'

import { postings } from './server/services/postings'


const server: Application = express()
server.disable('x-powered-by')
server.enable('trust proxy')
server.use(cors({ origin: true, credentials: true }))

server.use('/dist', express.static(`${__dirname}`))
server.use(compression())

const services = {
  postings,
}

Object.entries(services).forEach(([root, methods]) => {
  Object.entries(methods).forEach(([method, endpoints]) => {
    Object.entries(endpoints).forEach(([title, service]) => {
      server[method as 'get'](`/services/${root}/${title}`, json(), async (req, res) => {
        const response = await service(req.body)
        res.send(response)
      })
    })
  })
})

server.get('/*', async (req, res) => {
  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(<Theme>
    <GlobalStyle />
    <StaticRouter location={req.url}>
      <>
        <Header />
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    </StaticRouter>
  </Theme>))
  sheet.seal()
  const css = sheet.getStyleTags()
  
  res.send(oneLine`<!doctype html>
    <html>
      <head>
        ${css.replace('data-styled', 'data-server-styled')}
      </head>
      <body>
        <div id="main">${html}</div>
        <script async src="/dist/index.js"></script>
      </body>
    </html>`)
})


server.listen(5000)
