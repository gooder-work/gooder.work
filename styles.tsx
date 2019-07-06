import React from 'react'
import { FunctionComponent } from 'react'
import { createGlobalStyle, ThemeProvider, DefaultTheme } from 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      rythm: number
      radius: number
    }

    colors: {
      primary: string
      secondary: string
      background: string
      highlight: string
      alert: string
    }
  }
}

export const colors = {
  primary: '#000001',
  secondary: '#F2F3F2',
  background: '#FFFFFE',
  highlight: '#27AE60',
  alert: '#CC0000'
}

export const sizes = {
  rythm: 20,
  gutter: 33,
  radius: 3
}

export const theme: DefaultTheme = {
  colors,
  sizes
}

export const Theme: FunctionComponent<{}> = props => {
  return <ThemeProvider theme={theme}>
    <>
      {props.children}
    </>
  </ThemeProvider>
}

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: ${({ theme })=> theme.sizes.rythm}px;
    line-height: 1.333;

    color: ${({ theme })=> theme.colors.primary};
    background-color: ${({ theme })=> theme.colors.background};

    margin: 0;
  }

  main {
    min-height: 88vh;
    padding: ${({ theme })=> `${theme.sizes.rythm*6}px ${theme.sizes.rythm}px ${theme.sizes.rythm}px`};
  }

  h1, h2, h3, h4, h5, h6, p {
    white-space: pre-line;
    margin: 0 0 ${({ theme })=> theme.sizes.rythm}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  a, button {
    outline: none;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    position: relative;
    &:active { top: 1px; }
  }
`