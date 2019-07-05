import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GooderButton = styled.button`
  cursor: pointer;
  outline: none;
  position: relative;
  display: inline-block;

  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  line-height: ${({ theme }) => theme.sizes.rythm}px;
  font-size: ${({ theme }) => theme.sizes.rythm/1.333}px;
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  padding: ${({ theme }) => theme.sizes.rythm}px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.sizes.radius}px;

  &:hover,
  &:focus {
    top: -1px;
  }

  &:active {
    top: 0px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.88;
  }
`

export interface Props {
}

export const Button: FunctionComponent<Props> = props => {
  return <GooderButton>{props.children}</GooderButton>
}