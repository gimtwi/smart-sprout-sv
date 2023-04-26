import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { PlantModel } from "../entities/centralProcessingFile";
import { EditPlantInput, PlantInput } from "../entities/inputs/plant.input";
import { PlantType } from "../entities/types/plant.type";

@Resolver(PlantType)
export class PlantResolver {
  @Query(() => [PlantType])
  async findAllPlants(): Promise<PlantType[]> {
    //set humidity, brightness and temperature from devises here
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
    //set humidity, brightness and temperature from devises here
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

  @Mutation(() => PlantType)
  async editPlant(
    @Arg("input", () => EditPlantInput) input: EditPlantInput
  ): Promise<PlantType | null> {
    await PlantModel.findByIdAndUpdate(input._id, {
      ...input,
    }).catch((error) => {
      console.log(error);
    });
    return await PlantModel.findById(input._id);
  }

  @Mutation(() => Boolean)
  async waterPlant(@Arg("id", () => String) id: string) {
    const item = await PlantModel.findById(id);
    if (!item) {
      return false;
    }
    //activating functionality here
    await PlantModel.findByIdAndUpdate(id, { watering: !item.watering });
    return true;
  }

  @Mutation(() => Boolean)
  async turnOnLightning(@Arg("id", () => String) id: string) {
    const item = await PlantModel.findById(id);
    if (!item) {
      return false;
    }
    //activating functionality here
    await PlantModel.findByIdAndUpdate(id, { lighting: !item.lighting });
    return true;
  }

  @Mutation(() => Boolean)
  async turnOnFan(@Arg("id", () => String) id: string) {
    const item = await PlantModel.findById(id);
    if (!item) {
      return false;
    }
    //activating functionality here
    await PlantModel.findByIdAndUpdate(id, { fan: !item.fan });
    return true;
  }

  @Mutation(() => Boolean)
  async deletePlant(@Arg("id", () => String) id: string) {
    const item = await PlantModel.findById(id);
    if (!item) {
      return false;
    }
    await PlantModel.findByIdAndDelete(id);
    return true;
  }
}
