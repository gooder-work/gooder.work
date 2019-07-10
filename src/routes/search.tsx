
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'

import { search } from '../server/clients/algolia'
import { Hit } from '../components/hit'

export const Search: FunctionComponent<RouteComponentProps<any>> = props => {
  return <>
    <InstantSearch searchClient={search} indexName='postings'>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </>
}
