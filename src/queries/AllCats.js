// @flow

import {
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay';

import GraphQLCat from '../outputs/Cat';

import type { GraphqlContextType } from '../types/GraphqlContextType';

const { connectionType: AllCatsConnection } = connectionDefinitions({
  nodeType: GraphQLCat,
});

export default {
  type: AllCatsConnection,
  args: {
    ...connectionArgs,
  },
  resolve: async (_: mixed, args: Object, { Cat }: GraphqlContextType) => {
    const cats = await Cat.find();
    cats.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return connectionFromArray(cats, args);
  },
};
