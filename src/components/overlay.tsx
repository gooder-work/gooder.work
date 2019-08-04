
import React, { useState } from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { InstantSearch, SearchBox } from 'react-instantsearch-dom'
import { Hits, Stats, Configure, ToggleRefinement } from 'react-instantsearch-dom'
import { motion, AnimatePresence } from 'framer-motion'
import styled from 'styled-components'


const GooderOverlay = styled(motion.div)(props => `
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: initial;

  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
`)

const OverlayBack = styled.button(({ theme }) => `
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;

  background-color: ${theme.colors.backgrounds.subdued};
  opacity: 0.88;
`)

export const OverlayContainer = styled.div<{ wide?: boolean }>(({ wide, theme }) => `
  position: relative;
  z-index: 1;
  
  background: ${theme.colors.backgrounds.empty};
  width: 100%;
  max-width: ${theme.sizes.rythm * (wide ? 60 : 30)}px;
  min-height: 66vh;
  border-radius: ${theme.sizes.radius}px;
`)

export const Overlay: FunctionComponent<{
  wide?: boolean
  onClose: () => void
}> = props => {
  return <GooderOverlay
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.666 }}>
    <OverlayBack onClick={() => props.onClose()} />
    <OverlayContainer wide={props.wide}>
      {props.children}
    </OverlayContainer>
  </GooderOverlay>
}
