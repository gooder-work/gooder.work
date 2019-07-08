import express from 'express'
import { Application, Request, Response } from 'express'
import cors from 'cors'
import compression from 'compression'
import { json, raw } from 'body-parser'

import React from 'react'
import { StaticRouter, matchPath } from 'react-router'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { oneLine } from 'common-tags'

import { queries, routes } from './server/queries'

import Main from './main'
import { ResponsesContext } from './contexts/responses';

const server: Application = express()
server.disable('x-powered-by')
server.enable('trust proxy')
server.use(cors({ origin: true, credentials: true }))

server.use('/dist', express.static(`${__dirname}`))
server.use(compression())

Object.entries(queries).forEach(([method, endpoints]) => {
  Object.entries(endpoints).forEach(([endpoint, service]) => {
    server[method as 'get'](`/queries/${endpoint}`, json(), async (req, res) => {
      const response = await service(req.params, req.body)
      res.send(response)
    })
  })
})

server.get('/*', async (req, res) => {
  let responses = {}
  const [_, endpoints] = Object.entries(routes)
    .find(([path]) => matchPath(req.url, { path, exact: true })) || [undefined, undefined]
  if (endpoints) {
    responses = (await Promise.all(
      endpoints.map(async endpoint => ({
        endpoint,
        response: await queries.get[endpoint as 'posting'](req.params),
      }))
    )).reduce<{ [endpoint: string]: any }>((reduced, response) => {
      reduced[response.endpoint] = response.response
      return reduced
    }, {})
  }

  const main = <Main staticLocation={req.url} responses={responses} />

  const sheet = new ServerStyleSheet()
  const html = renderToString(sheet.collectStyles(main))
  sheet.seal()
  const css = sheet.getStyleTags()
  
  res.send(oneLine`<!doctype html>
    <html>
      <head>
        ${css.replace('data-styled', 'data-server-styled')}
      </head>
      <body>
        <div id="main">${html}</div>
        <script>window.responses = ${JSON.stringify(responses)}</script>
        <script async src="/dist/index.js"></script>
      </body>
    </html>`)
})


server.listen(5000)
