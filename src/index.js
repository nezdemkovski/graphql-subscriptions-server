// @flow

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import compression from 'compression';
import { graphqlExpress } from 'apollo-server-express';
import expressPlayground from 'graphql-playground-middleware-express';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import Schema from './Schema';
import RootModel from './models/RootModel';
import {
  BASE_URI,
  WS_BASE_URI,
  PORT,
  MONGO_URI,
  MONGO_DATABASE_NAME,
} from './serverConfig';

const app = express();
const server = createServer(app);

mongoose.connect(`${MONGO_URI}${MONGO_DATABASE_NAME}`);
mongoose.Promise = global.Promise;

app.use('*', cors());
app.use(compression());
app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema: Schema,
    context: RootModel,
  }),
);
app.get(
  '/playground',
  expressPlayground({
    endpoint: '/graphql',
    subscriptionsEndpoint: `${WS_BASE_URI}/subscriptions`,
  }),
);
server.listen(PORT, () => {
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema: Schema,
    },
    {
      server,
      path: '/subscriptions',
    },
  );
  console.log(`GraphQL Server is now running on ${BASE_URI}/graphql`);
  console.log(`Subscriptions are running on ${WS_BASE_URI}/subscriptions`);
});
