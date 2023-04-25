import { getModelForClass } from "@typegoose/typegoose";
import { PlantType } from "./types/plant.type";

export const PlantModel = getModelForClass(PlantType);
