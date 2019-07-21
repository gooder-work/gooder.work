
import React from 'react'
import { FunctionComponent } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Button } from '../components/button'
import { mutate } from '../components/query'

export const Search: FunctionComponent<RouteComponentProps<any>> = props => {
  return <>
    <p>Search here <Button>Search</Button></p>
    <form onSubmit={e => {
      e.preventDefault()
      mutate('notification_signup', { email: e.currentTarget.email.value }) 
    }}>
      <input type='email' name='email' placeholder='Email' />
      <button type='submit'>Send</button>
    </form>
  </>
}
