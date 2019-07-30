import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from './flex'
import { Button } from './button'
import { Input } from './input'

const GooderHeader = styled.header(({ theme }) => `
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${theme.sizes.rythm / 3}px ${theme.sizes.rythm}px;
  background: ${theme.colors.backgrounds.subdued};
  border-bottom: 1px solid ${theme.colors.backgrounds.light};

  nav {
    flex: 1;

    > a,
    > button,
    > small {
      margin-left: ${theme.sizes.rythm}px;

      &:first-child {
        margin-left: 0;
      }
    }

    &:nth-child(2) {
      text-align: center;
    }

    &:nth-child(3) {
      text-align: right;
    }
  }
`)

export const Header: FunctionComponent<{}> = props => {
  return <GooderHeader>
    <Flex middle>
      <nav>
        <Link to='/'><strong>Gooder Work</strong></Link>
        <Link to='/search'><small>Search</small></Link>
        <Link to='/new_posting'><small>Post new job</small></Link>
      </nav>
      <nav>
        <Input type='search' name='search' placeholder='Search job posting' />
      </nav>
      <nav>
        <Button small>Login</Button>
        <small><Link to='/'><strong>En</strong></Link> / <Link to='/'>Fr</Link></small>
      </nav>
    </Flex>
  </GooderHeader>
}
