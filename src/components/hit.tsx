import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Hit as HitType } from 'react-instantsearch-core'

import { PostingDocument } from '../server/models/posting'


const GooderHit = styled(Link)`
  
`
export const Hit: FunctionComponent<{ hit: HitType<PostingDocument> }> = props => {
  return <GooderHit to={`/postings/${props.hit.objectID}`}>{props.hit.title}</GooderHit>
}
