
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { PostingDocument } from '../server/models/posting'

// console.log(process.env)

export const Home: FunctionComponent<RouteComponentProps<any>> = props => {
  return <>
    <p><Link to='/search'>Search</Link></p>
    <ul>
      {/* {!loading && postings.map(posting => <li key={posting._id}>
        <Link to={`/postings/${posting._id}`}>{posting.title}</Link>
      </li>)} */}
    </ul>
  </>
}
