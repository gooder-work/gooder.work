import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const GooderHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  padding: ${({ theme })=> theme.sizes.rythm}px;
`;

export const Header: FunctionComponent<{}> = props => {
  return <GooderHeader>
    <h1>gooder.work</h1>
  </GooderHeader>
}