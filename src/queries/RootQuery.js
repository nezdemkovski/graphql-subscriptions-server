// @flow

import { GraphQLObjectType } from 'graphql';

import Cat from './Cat';
import AllCats from './AllCats';

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'Root Query',
  fields: {
    cat: Cat,
    allCats: AllCats,
  },
});
