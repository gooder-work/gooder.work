import React, { ReactNode } from 'react'
import { Component } from 'react'
import axios, { AxiosRequestConfig } from 'axios'


export class Query<T> extends Component<{
  endpoint: string
  render: (loading: boolean, response: T) => ReactNode
}, {
  loading: boolean
  response?: T
}> {
  constructor(props: any) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  public componentDidMount() {
    this.request()
  }

  public render() {
    return this.props.render(this.state.loading, this.state.response)
  }

  private request() {
    this.setState({ loading: true })
    axios({
      method: 'get',
      url: `${process.env.NODE_ENV === 'production' ? '' : '//localhost:5000'}/queries/${this.props.endpoint}`,
      withCredentials: true,
      responseType: 'json',
    }).then(response => this.setState({ response: response.data, loading: false }))
  }
}
