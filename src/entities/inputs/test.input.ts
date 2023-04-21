import { Field, InputType } from "type-graphql";

@InputType()
export class TestInput {
  @Field(() => String, { nullable: true })
  name: string;
}
