
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { PostingDocument } from '../server/models/posting'
import { Query } from '../components/query'

export const Posting: FunctionComponent<RouteComponentProps<{ id: string }>> = props => {
  return <Query<PostingDocument> endpoint={`postings/${props.match.params.id}` as 'postings/:id'}
    render={(loading, posting) => <>
    <p><Link to='/search'>Back to Search</Link></p>
    <ul>
      {!loading && posting.title}
    </ul>
  </>} />
}
