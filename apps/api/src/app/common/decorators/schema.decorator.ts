import { Schema as MongooseSchema, SchemaOptions } from '@nestjs/mongoose';

export const Schema = (options?: SchemaOptions) =>
  MongooseSchema({
    toJSON: {
      versionKey: false,
      transform: (_, result) => {
        result.id = result._id;
        delete result._id;
      },
    },
    ...options,
  });
