// @flow

import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Cat',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    nickName: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    createdAt: {
      type: GraphQLString,
    },
    avatarUrl: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  },
});
