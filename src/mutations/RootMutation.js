// @flow

import { GraphQLObjectType } from 'graphql';

import AddCat from './AddCat';
import RemoveCat from './RemoveCat';

export default new GraphQLObjectType({
  name: 'RootMutation',
  description: 'Root Mutation',
  fields: {
    addCat: AddCat,
    removeCat: RemoveCat,
  },
});
