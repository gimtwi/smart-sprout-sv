import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PlantModel } from "../entities/centralProcessingFile";
import { PlantInput } from "../entities/inputs/plant.input";
import { PlantType } from "../entities/types/plant.type";

@Resolver(PlantType)
export class PlantResolver {
  @Query(() => [PlantType])
  async findAllPlants(): Promise<PlantType[]> {
    return PlantModel.find();
  }

  @Query(() => PlantType)
  async findPlantById(
    @Arg("id", () => String) id: string
  ): Promise<PlantType | null> {
    const item = await PlantModel.findById(id);
    if (!item) {
      throw new Error("This item does not exist.");
    }
    return item;
  }

  @Mutation(() => PlantType)
  async addPlant(
    @Arg("input", () => PlantInput) input: PlantInput
  ): Promise<PlantType> {
    const item = await PlantModel.create({
      ...input,
    });
    return item;
  }
}
