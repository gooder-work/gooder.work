
import React, { useState, FocusEventHandler, useRef, useEffect } from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { InstantSearch, SearchBox } from 'react-instantsearch-dom'
import { Hits, Stats, Configure, ToggleRefinement } from 'react-instantsearch-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { linear } from '@popmotion/easing'
import styled from 'styled-components'

import { search } from '../server/clients/algolia'
import { Hit } from './hit'
import { inputStyles } from './input'
import { Overlay, OverlayContainer } from './overlay'


declare module 'react-instantsearch-dom' {
  interface SearchBoxProps {
    onFocus?: FocusEventHandler<HTMLInputElement>
  }
}

const GooderSearch = styled.div(props => `

  ${OverlayContainer} input {
    max-width: 100%;
  }

  input {
    ${inputStyles(props)}

    & + button {
      display: inline-block;
      background: transparent;
      border: none;
      vertical-align: middle;
      margin-left: -${props.theme.sizes.rythm * 1.5}px;

      svg {
        height: ${props.theme.sizes.rythm}px;
        width: ${props.theme.sizes.rythm}px;

        path {
          fill: ${props.theme.colors.highlights.subdued};
        }
      }
    }

    & + button + button {
      display: none;
    }
  }
`)

export const Search: FunctionComponent<{}> = props => {
  const [focused, setFocus] = useState<{ x: number, y: number }>(undefined)
  // const [position, setPosition] = useState<{ x: number, y: number }>(undefined)
  // const input = useRef<HTMLDivElement>(null)
  // useEffect(() => {
  //   if (focused && input.current) {
  //     const parent = input.current.offsetParent as HTMLElement
  //     setPosition({
  //       x: parent.offsetLeft - focused.left,
  //       y: parent.offsetTop - focused.top,
  //     })
  //   }
  // }, [focused])

  return <GooderSearch>
    <InstantSearch searchClient={search} indexName='postings'>
      <AnimatePresence>
        {focused ? <Overlay wide onClose={() => setFocus(undefined)}>
          {/* <div ref={input}>
            {position && <motion.div
              initial={{ x: -position.x, y: -position.y, maxWidth: 425 }}
              animate={{ x: 0, y: 0, maxWidth: 1020 }}
              exit={{ x: -position.x, y: -position.y, maxWidth: 425 }}
              transition={{ ease: 'easeInOut', duration: 0.333 }}>
              
            </motion.div>}
          </div> */}
          <SearchBox autoFocus translations={{ placeholder: 'Search job postings' }} />

          <small><Stats /></small>
          <ToggleRefinement
            attribute='remote'
            label='Remote'
            value={true}
          />

          <Configure attributesToSnippet={['description']} />
          <Hits hitComponent={Hit} />
        </Overlay>
      : <SearchBox key='focus' translations={{ placeholder: 'Search job postings' }} onFocus={e => {
          setFocus({
            x: e.currentTarget.offsetLeft - window.scrollX,
            y: e.currentTarget.offsetTop - window.scrollY,
          })
        }} />}
        
      </AnimatePresence>
    </InstantSearch>
  </GooderSearch>
}
