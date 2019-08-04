import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled, { css, StyledProps } from 'styled-components'

interface Props {
  name: string
  placeholder?: string
  value?: any
  defaultValue?: any
  type?: string
  label?: string
}

export const inputStyles = ({ theme }: StyledProps<{}>) => `
  font-size: ${theme.sizes.rythm}px;
  font-weight: normal;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.backgrounds.empty};
  border: 1px solid ${theme.colors.backgrounds.light};
  border-radius: ${theme.sizes.radius}px;

  width: 100%;
  max-width: ${theme.sizes.rythm * 25}px
  padding: ${theme.sizes.rythm / 2}px;

  ::-webkit-input-placeholder, ::-webkit-input-placeholder { color: ${theme.colors.highlights.subdued}; }
  :-moz-placeholder, :-moz-placeholder { color: ${theme.colors.highlights.subdued}; }
`
const GooderInput = styled.input(inputStyles)

export const Input: FunctionComponent<Props> = props => {
  return <GooderInput {...props}>{props.children}</GooderInput>
}
