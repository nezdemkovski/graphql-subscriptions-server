// @flow

import { GraphQLString, GraphQLInt } from 'graphql';

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
      type: GraphQLString,
    },
    nickName: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    avatarUrl: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
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
