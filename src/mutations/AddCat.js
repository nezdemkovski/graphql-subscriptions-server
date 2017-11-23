// @flow

import { GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql';

import { pubsub } from '../serverConfig';
import GraphQLCat from '../outputs/Cat';

import type { GraphqlContextType } from '../types/GraphqlContextType';
import type { Cat as CatType } from '../types/Cat';

type argsType = {
  name: string,
  nickName: string,
  description: string,
  avatarUrl: string,
  age: number,
};

export default {
  type: GraphQLCat,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    nickName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    avatarUrl: {
      type: new GraphQLNonNull(GraphQLString),
    },
    age: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (
    _: mixed,
    args: argsType,
    { Cat }: GraphqlContextType,
  ): Promise<CatType> => {
    const payload = {
      ...args,
      createdAt: new Date().toISOString(),
    };
    const cat = await new Cat(payload).save();

    pubsub.publish('newCat', cat);
    return cat;
  },
};
