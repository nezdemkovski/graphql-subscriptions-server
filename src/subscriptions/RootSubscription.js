// @flow

import { GraphQLObjectType } from 'graphql';

import NewCat from './NewCat';
import RemovedCat from './RemovedCat';

export default new GraphQLObjectType({
  name: 'RootSubscription',
  description: 'Root Subscription',
  fields: {
    newCat: NewCat,
    removedCat: RemovedCat,
  },
});
