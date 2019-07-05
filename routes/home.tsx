
import React from 'react'
import { Component } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { PostingDocument } from '../server/models/posting'

import { request } from '../helpers/request'


interface Props extends RouteComponentProps<any> {}
interface State {
  postings: PostingDocument[]
}

export class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      postings: []
    }
  }

  componentDidMount() {
    request('get', 'featured_postings').then((postings: PostingDocument[])=> {
      this.setState({ postings })
    })
  }

  public render() {
    return <>
      <p><Link to='/search'>Search</Link></p>
      <ul>
        {this.state.postings.map(posting => <li key={posting._id}>
          <Link to={`/postings/${posting._id}`}>{posting.title}</Link>
        </li>)}
      </ul>
    </>
  }
}