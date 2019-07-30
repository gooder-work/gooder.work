import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const GooderFooter = styled.footer(({ theme }) => `
  font-size: ${theme.sizes.small}px;
  text-align: center;
  background-color: ${theme.colors.backgrounds.empty};
  border-top: 1px solid ${theme.colors.backgrounds.subdued};
  padding: ${theme.sizes.rythm * 2}px;
`)

export const Footer: FunctionComponent<{}> = props => {
  return <GooderFooter>
    <nav>
      <NavLink to='/pages/about'>About</NavLink>&nbsp;–&nbsp;
      <NavLink to='/pages/about'>Contact</NavLink>&nbsp;–&nbsp;
      <NavLink to='/pages/about'>Privacy</NavLink>&nbsp;–&nbsp;
      <NavLink to='/pages/about'>Jobs</NavLink>
    </nav>
    <strong>&copy; Gooder Work Corp.</strong>
  </GooderFooter>
}
