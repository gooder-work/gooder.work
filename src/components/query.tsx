import React, { ReactNode, createContext } from 'react'
import { Component } from 'react'
import axios, { AxiosRequestConfig, Method } from 'axios'

import { queries } from '../server/queries'
import { ResponsesContext } from '../contexts/responses'

export const request = async (
  method: Method,
  endpoint: keyof typeof queries.get | keyof typeof queries.post,
  data?: any
) => {
  const response = await axios({
    method,
    url: `${process.env.NODE_ENV === 'production' ? '' : '//localhost:5000'}/queries/${endpoint}`,
    withCredentials: true,
    responseType: 'json',
    data,
  })
  return response.data
}

export const mutate = (endpoint: keyof typeof queries.post, data: any) => {
  return request('post', endpoint, data)
}

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
    } else {
      delete this.context.responses[this.props.endpoint]
    }
  }

  public render() {
    return this.props.render(this.state.loading, this.state.response)
  }

  private request() {
    this.setState({ loading: true })
    request('get', this.props.endpoint).then(response => this.setState({ response, loading: false }))
  }
}
