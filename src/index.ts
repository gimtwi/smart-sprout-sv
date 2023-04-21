import { ApolloServer } from "apollo-server-express";
import * as dotenv from "dotenv";
import express, { Express } from "express";
import * as mongoose from "mongoose";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers";

dotenv.config();

const start = async () => {
  const port = process.env.PORT;
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

  await mongoose
    .connect(`${process.env.MONGO_DATABASE}`)
    .then(() => console.log("Connected to MongoDB!"));

  await server.start();
  server.applyMiddleware({ app });
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
};

start().catch((error) => {
  console.log(error);
});
