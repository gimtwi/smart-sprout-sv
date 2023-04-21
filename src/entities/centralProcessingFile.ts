import { getModelForClass } from "@typegoose/typegoose";
import { TestType } from "./types/test.type";

export const TestModel = getModelForClass(TestType);
