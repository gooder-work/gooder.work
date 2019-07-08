import React from 'react'
import { Component } from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'

import { GlobalStyle, Theme } from './styles'
import { Routes } from './routes'

import { Header } from './components/header'
import { Footer } from './components/footer'


export default class Main extends Component<{
  staticLocation?: string
}, {}> {

  public render() {
    return <Theme>
      <GlobalStyle />
      {this.props.staticLocation
      ? <StaticRouter location={this.props.staticLocation}>
        <>
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
        </>
      </StaticRouter>
      : <BrowserRouter>
        <>
          <Header />
          <main>
            <Routes />
          </main>
          <Footer />
        </>
      </BrowserRouter>}
    </Theme>
  }
}
