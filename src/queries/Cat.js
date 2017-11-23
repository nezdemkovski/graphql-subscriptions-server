// @flow

import { GraphQLID } from 'graphql';

import GraphQLCat from '../outputs/Cat';

import type { GraphqlContextType } from '../types/GraphqlContextType';
import type { Cat as CatType } from '../types/Cat';

type argsType = {
  id: string,
};

export default {
  type: GraphQLCat,
  args: {
    id: {
      type: GraphQLID,
    },
  },
  resolve: async (
    _: mixed,
    { id }: argsType,
    { Cat }: GraphqlContextType,
  ): Promise<CatType> => {
    const cats = await Cat.find({ _id: id });
    return cats[0];
  },
};
