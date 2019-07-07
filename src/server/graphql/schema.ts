
import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql'
import { PostingSchema } from './schemas/posting'


export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      ...PostingSchema.query,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
      ...PostingSchema.mutation,
    }),
  }),
  types: [
    ...PostingSchema.types,
  ],
})

