"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
dotenv.config();
const start = async () => {
    const port = process.env.PORT;
    const app = (0, express_1.default)();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: resolvers_1.resolvers,
        validate: false,
    });
    const server = new apollo_server_express_1.ApolloServer({
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
