
import React from 'react'
import { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'


interface Props extends RouteComponentProps<any> {}
interface State {}

export class Home extends Component<Props, State> {
  public render() {
    return <p>Home</p>
  }
}