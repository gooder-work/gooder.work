
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { PostingDocument } from '../server/models/posting'
import { Query } from '../components/query'

export const Home: FunctionComponent<RouteComponentProps<any>> = props => {
  return <Query<PostingDocument[]> endpoint='featured_postings' render={(loading, postings) => <>
    <p><Link to='/search'>Search</Link></p>
    <ul>
      {!loading && postings.map(posting => <li key={posting._id}>
        <Link to={`/postings/${posting._id}`}>{posting.title}</Link>
      </li>)}
    </ul>
  </>} />
}
