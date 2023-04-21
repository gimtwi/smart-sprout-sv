import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class TestType {
  @Field(() => ID)
  readonly _id: string;

  @Field(() => String)
  @prop({ type: () => String, required: true })
  name: string;
}
