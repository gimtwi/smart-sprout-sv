import { prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType } from "type-graphql";
import { PlantTypes, SVGUsed } from "../enums";

@ObjectType()
export class PlantType {
  @Field(() => ID)
  readonly _id: string;

  @Field(() => PlantTypes)
  @prop({
    type: () => String,
    enum: PlantTypes,
  })
  type: PlantTypes;

  @Field(() => String)
  @prop({ type: () => String, required: true })
  name: string;

  @Field(() => SVGUsed)
  @prop({
    type: () => String,
    enum: SVGUsed,
  })
  img: SVGUsed;

  @Field(() => Number, { nullable: true })
  @prop({ type: () => Number })
  humidity: number;

  @Field(() => Number, { nullable: true })
  @prop({ type: () => Number })
  brightness: number;

  @Field(() => Number, { nullable: true })
  @prop({ type: () => Number })
  temperature: number;
}
