// @flow

import {
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
} from 'graphql-relay';

import { sortArrayByDate } from '../models/Cat';
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
    sortArrayByDate(cats);

    return connectionFromArray(cats, args);
  },
};
