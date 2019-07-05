
import React from 'react'
import { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Button } from '../components/button'

interface Props extends RouteComponentProps<any> {}
interface State {}

export class Search extends Component<Props, State> {
  public render() {
    return <p>Search here <Button>Search</Button></p>
  }
}