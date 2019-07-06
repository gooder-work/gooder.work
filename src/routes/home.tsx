
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Query } from 'react-fetching-library'
import { PostingDocument } from '../server/models/posting'


export const Home: FunctionComponent<RouteComponentProps<any>> = props => {
  return <Query<PostingDocument[]> action={{
    method: 'GET',
    endpoint: '/featured_postings',
  }}>
    {({ loading, payload: postings }) => <>
      <p><Link to='/search'>Search</Link></p>
      <ul>
        {!loading && postings.map(posting => <li key={posting._id}>
          <Link to={`/postings/${posting._id}`}>{posting.title}</Link>
        </li>)}
      </ul>
    </>}
  </Query>
}
