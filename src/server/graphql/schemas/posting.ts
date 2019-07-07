import {
  GraphQLEnumType,
  GraphQLInterfaceType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt
} from 'graphql'
import Posting from '../../models/posting'

const postingType = new GraphQLObjectType({
  name: 'Posting',
  fields: () => ({
    title: { type: GraphQLString },
  }),
})

const query = {
  postings: {
    type: new GraphQLList(postingType),
    args: {
      filters: { type: GraphQLString },
    },
    resolve: (root: any, { filters }: any) => Posting.list(filters),
  },
}

const mutation = {
  createPosting: {
    type: postingType,
    args: {
      title: { type: GraphQLString },
    },
    resolve: (obj: any, input: any) => Posting.create(input),
  },
}


export const PostingSchema = {
  query,
  mutation,
  // subscription,
  types: [postingType],
}
