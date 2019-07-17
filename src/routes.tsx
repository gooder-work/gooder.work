import React from 'react'
import { FunctionComponent } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

import { Posting } from './routes/posting'
import { Search } from './routes/search'
import { Home } from './routes/home'

export const Routes: FunctionComponent<{}> = props => {
  return <Switch>
    <Route exact path='/postings/:id' component={Posting} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/' component={Home} />
  </Switch>
}
