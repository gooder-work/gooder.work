import React, { FunctionComponent } from 'react'
import Posting, { PostingDocument } from '../server/models/posting'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface ComponentProps {
  posting: PostingDocument
}

const JobRow = styled.div`
  margin-bottom: 12px;
`

const Left = styled.div`
  display: flex;
`
const BoldStyledLink = styled(Link)`
  font-weight: bold;
`
const PaddedSpan = styled.span`
  padding-left: 4px;
  padding-right: 4px;
`
const Tagline = styled.p`
  color: #AAA;
`

export const JobLine: FunctionComponent<ComponentProps> = props => {
  return (
    <JobRow key={props.posting._id}>
      <Left>
        <BoldStyledLink to={`/postings/${props.posting._id}`}>{props.posting.title}</BoldStyledLink>
        <PaddedSpan>@</PaddedSpan>
        <Link to={`/companies/${props.posting.company._id}`}>{props.posting.company.name}</Link>
      </Left>
      <Tagline>{props.posting.company.tagline}</Tagline>
    </JobRow>
  )
}
