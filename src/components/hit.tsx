import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Highlight } from 'react-instantsearch-dom'
import { Hit as HitType } from 'react-instantsearch-core'

import { PostingDocument } from '../server/models/posting'



const GooderHit = styled(Link)`
  h4 {
    margin-bottom: 0;
  }

  mark {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`
export const Hit: FunctionComponent<{ hit: HitType<PostingDocument> }> = ({ hit }) => {
  return <GooderHit to={`/postings/${hit.objectID}`}>
    <h4><Highlight hit={hit} attribute='title' tagName='mark' />
      @ <Highlight hit={hit} attribute='company.name' tagName='mark' /></h4>
    <p><Highlight hit={hit} attribute='city' tagName='mark' /></p>
  </GooderHit>
}
