// @flow

import { GraphQLSchema } from 'graphql';

import RootQuery from './queries/RootQuery';
import RootMutation from './mutations/RootMutation';
import RootSubscription from './subscriptions/RootSubscription';

const schemaDefinition: Object = {
  query: RootQuery,
  mutation: RootMutation,
  subscription: RootSubscription,
};

export default new GraphQLSchema(schemaDefinition);
