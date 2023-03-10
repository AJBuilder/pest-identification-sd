// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Pests = {
  "UNKNOWN": "UNKNOWN",
  "GRAPE_BERRY_MOTH": "GRAPE_BERRY_MOTH",
  "SPOTTED_LANTERN_FLY": "SPOTTED_LANTERN_FLY"
};

const { Reply, Report, Post, ReplyReport, PostReport, GPSLocation } = initSchema(schema);

export {
  Reply,
  Report,
  Post,
  ReplyReport,
  PostReport,
  Pests,
  GPSLocation
};