
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { PostingDocument } from '../server/models/posting'
import { Query } from '../components/query'
import { JobLine } from '../components/job-line'

export const Home: FunctionComponent<RouteComponentProps<any>> = props => {
  return <Query<PostingDocument[]> endpoint='featured_postings' render={(loading, postings) => <>
    <p><Link to='/search'>Search</Link></p>
    <div>
      {!loading && postings.map(posting => <JobLine key={posting._id} posting={posting} />)}
    </div>
  </>} />
}
