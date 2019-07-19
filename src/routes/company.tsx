
import React from 'react'
import { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { CompanyDocument } from '../server/models/company'
import { Query } from '../components/query'

interface RouteProps {
  id: string
}

export const Company: FunctionComponent<RouteComponentProps<RouteProps>> = props => {
  return <Query<CompanyDocument> endpoint={`companies/${props.match.params.id}` as 'companies/:id'}
    render={(loading, company) => {
      if (loading) {
        return(
          <div>
            <p>...</p>
          </div>
        )
      } else {
        return (
          <>
            <div>
              <p>{company.name}</p>
              <p>{company.description}</p>
            </div>
          </>
        )
      }
    }} />
}
