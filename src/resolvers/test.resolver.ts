import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { TestModel } from "../entities/centralProcessingFile";
import { TestInput } from "../entities/inputs/test.input";
import { TestType } from "../entities/types/test.type";

@Resolver(TestType)
export class TestResolver {
  @Query(() => [TestType])
  async findAllTests(): Promise<TestType[]> {
    return TestModel.find();
  }

  @Mutation(() => TestType)
  async addTest(
    @Arg("input", () => TestInput) input: TestInput
  ): Promise<TestType> {
    const test = await TestModel.create({
      ...input,
    });
    return test;
  }
}
