import React from 'react'
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createClient, ClientContextProvider, RequestInterceptor } from 'react-fetching-library'

import { GlobalStyle, Theme } from './styles'
import { Routes } from './routes'

import { Header } from './components/header'
import { Footer } from './components/footer'

const client = createClient({
  requestInterceptors: [() => async action => {
    return {
      ...action,
      endpoint: `${process.env.NODE_ENV === 'production' ? '' : '//localhost:5000'}${action.endpoint}`,
    }
  }],
})

export default class Main extends Component<{}, {}> {

  public render() {
    return <ClientContextProvider client={client}>
      <Theme>
      <GlobalStyle />
      <BrowserRouter>
        <>
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
        </>
      </BrowserRouter>
    </Theme>
  </ClientContextProvider>
  }
}
