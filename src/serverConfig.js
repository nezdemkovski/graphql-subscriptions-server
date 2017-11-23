import config from 'dotenv';
import { PubSub } from 'graphql-subscriptions';

config.config();

export const pubsub = new PubSub();
export const PORT = process.env.PORT || 8080;
export const BASE_URI = process.env.BASE_URI || `http://localhost:${PORT}`;
export const WS_BASE_URI =
  process.env.WS_BAS_URI || BASE_URI.replace(/^https?/, 'ws');
export const MONGO_URI = process.env.MONGO_URI;
export const MONGO_DATABASE_NAME = process.env.MONGO_DATABASE_NAME;
