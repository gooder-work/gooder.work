import React from 'react'
import { Component } from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'

import { GlobalStyle, Theme } from './styles'
import { Routes } from './routes'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { ResponsesContext } from './contexts/responses';


export default class Main extends Component<{
  staticLocation?: string
  responses?: { [endpoint: string]: any }
}, {}> {

  public render() {
    return <ResponsesContext.Provider value={{ responses: this.props.responses }}>
      <Theme>
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
    </ResponsesContext.Provider>
  }
}
