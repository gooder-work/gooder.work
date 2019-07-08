import React, { ReactNode, createContext } from 'react'
import { Component } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

import { queries } from '../server/queries'
import { ResponsesContext } from '../contexts/responses'

export class Query<T> extends Component<{
  endpoint: keyof typeof queries.get
  render: (loading: boolean, response: T) => ReactNode
}, {
  loading: boolean
  response?: T
}> {
  public static contextType = ResponsesContext
  public context!: React.ContextType<typeof ResponsesContext>

  constructor(props: any, context: React.ContextType<typeof ResponsesContext>) {
    super(props)
    const response = context.responses && context.responses[props.endpoint]
    this.state = {
      loading: response ? false : true,
      response,
    }
  }

  public componentDidMount() {
    if (!this.state.response) {
      this.request()
    } 
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
