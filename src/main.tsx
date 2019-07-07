import React from 'react'
import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle, Theme } from './styles'
import { Routes } from './routes'

import { Header } from './components/header'
import { Footer } from './components/footer'


export default class Main extends Component<{}, {}> {

  public render() {
    return <Theme>
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
  }
}
