import { Field, InputType } from "type-graphql";
import { PlantTypes, SVGUsed } from "../enums";

@InputType()
export class PlantInput {
  @Field(() => PlantTypes, { nullable: true })
  type: PlantTypes;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => SVGUsed, { nullable: true })
  img: SVGUsed;

  @Field(() => Number, { nullable: true })
  humidity: number;

  @Field(() => Number, { nullable: true })
  brightness: number;

  @Field(() => Number, { nullable: true })
  temperature: number;
}
