
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Button } from '../components/button'

export const Search: FunctionComponent<RouteComponentProps<any>> = props => {
  return <p>Search here <Button>Search</Button></p>
}