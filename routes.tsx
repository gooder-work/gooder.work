import React from 'react'
import { FunctionComponent } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

import { Home } from './routes/home'
import { Search } from './routes/search'
import { Company } from './routes/company';

export const Routes: FunctionComponent<{}> = props => {
  return <Switch>
    <Route exact path='/companies/:companyId' component={Company} />
    <Route exact path='/search' component={Search} />
    <Route exact path='/' component={Home} />
  </Switch>
}