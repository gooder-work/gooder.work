import React from 'react'
import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'


interface Props {
  center?: boolean
  spaced?: boolean
  middle?: boolean
}

export const Flex = styled.div<Props>(({ center, spaced, middle, theme }) => `
  display: flex;
  flex-wrap: wrap;

  ${center ? css`justify-content: center;` : ''}
  ${spaced ? css`justify-content: space-between;` : ''}
  ${middle ? css`align-items: center;` : ''}
`)
