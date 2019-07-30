
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { InstantSearch, SearchBox, Hits, Stats, Configure, ToggleRefinement } from 'react-instantsearch-dom'

import { search } from '../server/clients/algolia'
import { Hit } from '../components/hit'

export const Search: FunctionComponent<RouteComponentProps<any>> = props => {
  return <>
    <InstantSearch searchClient={search} indexName='postings'>
      <SearchBox /> <small><Stats /></small>
      <ToggleRefinement
        attribute='remote'
        label='Remote'
        value={true}
      />

      <Configure attributesToSnippet={['description']} />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </>
}
