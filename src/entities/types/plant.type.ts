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

  @Field(() => Number, { defaultValue: 0 })
  @prop({ type: () => Number, default: 0 })
  humidity: number;

  @Field(() => Number, { defaultValue: 0 })
  @prop({ type: () => Number, default: 0 })
  brightness: number;

  @Field(() => Number, { defaultValue: 0 })
  @prop({ type: () => Number, default: 0 })
  temperature: number;

  @Field(() => Boolean, { defaultValue: false })
  @prop({ type: () => Boolean, default: false })
  watering: boolean;

  @Field(() => Boolean, { defaultValue: false })
  @prop({ type: () => Boolean, default: false })
  lighting: boolean;

  @Field(() => Boolean, { defaultValue: false })
  @prop({ type: () => Boolean, default: false })
  fan: boolean;
}
