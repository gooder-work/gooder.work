
import React from 'react'
import { FunctionComponent } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Query } from 'react-fetching-library'
import { CompanyDocument } from '../server/models/company';

interface RouteProps {
  companyId: string
}


export const Company: FunctionComponent<RouteComponentProps<RouteProps>> = props => {
  return <Query<CompanyDocument> action={{
    method: 'GET',
    endpoint: `/api/companies/${props.match.params.companyId}`,
  }}>
    {({ loading, error, payload: company, query }) => {
      if (loading) {
        return(
          <div>
            <p>...</p>
          </div>
        )
      } else if (!error) {
        return (
          <>
            <div>
              <p>{company.name}</p>
              <p>{company.description}</p>
            </div>
          </>
        )
      } else {
        return (
          <div>
            <p>Error :(</p>
          </div>
        )
      }
    }
  }
  </Query>
}