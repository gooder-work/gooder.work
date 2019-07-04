import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'

const GooderFooter = styled.footer`
  color: ${({ theme })=> theme.colors.background};
  background-color: ${({ theme })=> theme.colors.primary};
  padding: ${({ theme })=> theme.sizes.rythm}px;
`;

export const Footer: FunctionComponent<{}> = props => {
  return <GooderFooter>
    &copy; good.work
  </GooderFooter>
}