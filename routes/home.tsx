
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Query } from 'react-fetching-library'
import { PostingDocument } from '../server/models/posting'
import { JobLine } from '../components/job-line';



export const Home: FunctionComponent<RouteComponentProps<any>> = props => {
  return <Query<PostingDocument[]> action={{
    method: 'GET',
    endpoint: '/featured_postings'
  }}>
    {({ loading, error, payload: postings, query }) => <>
      <p><Link to='/search'>Search</Link></p>
      <div>
        {!loading && postings.map(posting => <JobLine posting={posting} />)}
      </div>
    </>}
  </Query>
}