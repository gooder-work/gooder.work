import React from 'react'
import { FunctionComponent } from 'react'
import { createGlobalStyle, ThemeProvider, DefaultTheme } from 'styled-components'


declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      rythm: number
      small: number
      radius: number
    }

    colors: {
      primary: string
      backgrounds: {
        empty: string
        subdued: string
        light: string
        dark: string
      }
      highlights: {
        subdued: string
        light: string
        extreme: string
      }
      alert: string
    }
  }
}

export const colors = {
  primary: '#000000',
  backgrounds: {
    empty: '#FFFFFF',
    subdued: '#F2F3F2',
    light: '#FDF9F3',
    dark: '#000000',
  },
  highlights: {
    subdued: '#3041AF',
    light: '#FFE640',
    extreme: '#1ABCFE',
  },
  alert: '#F77474',
}

export const sizes = {
  rythm: 17,
  small: 14,
  gutter: 32,
  radius: 5,
}

export const defaultTheme: DefaultTheme = {
  colors,
  sizes,
}

export const Theme: FunctionComponent<{}> = props => {
  return <ThemeProvider theme={defaultTheme}>
    <>
      {props.children}
    </>
  </ThemeProvider>
}

export const GlobalStyle = createGlobalStyle(({ theme }) => `
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto",
      "Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-size: ${theme.sizes.rythm}px;
    line-height: 1.333;

    color: ${theme.colors.primary};
    background-color: ${theme.colors.backgrounds};

    margin: 0;
    overscroll-behavior: none;
  }

  main {
    min-height: 100vh;
    padding: ${`${theme.sizes.rythm * 6}px ${theme.sizes.rythm}px ${theme.sizes.rythm}px`};
  }

  h1, h2, h3, h4, h5, h6, p {
    white-space: pre-line;
    margin: 0 0 ${theme.sizes.rythm}px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  h1, h2, h3 {
    font-size: ${theme.sizes.rythm * 2}px;
  }

  h4, h5, h6 {
    font-size: ${theme.sizes.rythm}px;
  }

  small {
    font-size: ${theme.sizes.small}px;
  }

  a, button, input {
    // outline-color: ${theme.colors.highlights.light};
    outline: none;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    position: relative;
    &:active { top: 1px; }
  }
`)
