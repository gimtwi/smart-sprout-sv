import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import * as dotenv from "dotenv";
import express, { Express } from "express";
import * as mongoose from "mongoose";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers";
import { backendLink, frontendLink, mongoDB, portSV } from "./utils/constants";

dotenv.config();

const start = async () => {
  const app: Express = express();

  const schema = await buildSchema({
    resolvers: resolvers,
    validate: false,
  });

  const server = new ApolloServer({
    schema,
    csrfPrevention: true,
    cache: "bounded",
  });

  app.use(
    cors({
      credentials: true,
      origin: ["https://studio.apollographql.com", frontendLink],
    })
  );

  await mongoose
    .connect(`${mongoDB}`)
    .then(() => console.log("Connected to MongoDB!"));

  await server.start();
  server.applyMiddleware({ app, cors: false });
  app.listen(portSV, () => {
    console.log(`Server is running at ${backendLink}`);
  });
};

start().catch((error) => {
  console.log(error);
});
