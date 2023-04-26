import * as dotenv from "dotenv";

dotenv.config();

export const portSV = process.env.PORT_SV;
export const portUI = process.env.PORT_UI;
export const dom = process.env.DOMAIN;

export const mongoDB = process.env.MONGO_DATABASE;

export const backendLink = `http://${dom}:${portSV}/graphql`;
export const frontendLink = `http://${dom}:${portUI}`;
