import React from 'react'
import { FunctionComponent } from 'react'
import { PostingDocument } from '../server/models/posting'

export const JobPostingSchema: FunctionComponent<{
  posting: PostingDocument
}> = ({ posting }) => {
  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(
    {
      '@context' : 'https://schema.org/',
      '@type' : 'JobPosting',
      'title' : posting.title,
      'description' : posting.description,
      // 'identifier': {
      //   '@type': 'PropertyValue',
      //   'name': 'MagsRUs Wheel Company',
      //   'value': '1234567',
      // },
      'datePosted' : posting.posted_at,
      'validThrough' : posting.valid_until,
      'employmentType' : posting.employment_type,
      'hiringOrganization' : {
        '@type' : 'Organization',
        'name' : posting.company.name,
        'sameAs' : posting.company.domain,
        'logo' : posting.company.logo,
      },
      'jobLocation': {
        '@type': 'Place',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': posting.city,
          'addressRegion': posting.region,
          'addressCountry': posting.country,
        },
      },
      'jobLocationType': posting.remote ? 'TELECOMMUTE' : undefined,
      // 'baseSalary': {
      //   '@type': 'MonetaryAmount',
      //   'currency': 'USD',
      //   'value': {
      //     '@type': 'QuantitativeValue',
      //     'value': 40.00,
      //     'unitText': 'HOUR',
      //   },
      // },
    }
  )}} />
}
