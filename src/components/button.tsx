import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


interface Props {
  small?: boolean
}

const GooderButton = styled.button<Props>(({ small, theme }) => `
  cursor: pointer;
  position: relative;
  display: inline-block;

  color: ${theme.colors.highlights.subdued};
  text-decoration: none;
  font-size: ${theme.sizes.rythm}px;
  line-height: 1;
  font-weight: normal;
  text-align: center;
  background-color: ${theme.colors.highlights.light};

  padding: ${theme.sizes.rythm}px;
  border: 1px solid ${theme.colors.backgrounds.light};
  border-radius: ${theme.sizes.radius}px;

  ${small ? `
    font-size: ${theme.sizes.small}px;
    padding: ${theme.sizes.rythm / 3}px ${theme.sizes.rythm / 2}px;
  ` : ''}

  &:disabled {
    pointer-events: none;
    opacity: 0.88;
  }
`)

export const Button: FunctionComponent<Props> = props => {
  return <GooderButton {...props}>{props.children}</GooderButton>
}
