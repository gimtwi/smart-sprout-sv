import { registerEnumType } from "type-graphql";

export enum PlantTypes {
  Vegetable = "Vegetable",
  Fruit = "Fruit",
  Berry = "Berry",
  Herb = "Herb",
}

registerEnumType(PlantTypes, {
  name: "PlantTypes",
  description: "Types of plants",
});

export enum SVGUsed {
  tomato = "tomato",
  pepper = "pepper",
  broccoli = "broccoli",
  avocado = "avocado",
  apple = "apple",
  pineapple = "pineapple",
  turnip = "turnip",
  onion = "onion",
  carrot = "carrot",
  pomegranate = "pomegranate",
  strawberry = "strawberry",
  orange = "orange",
  raspberry = "raspberry",
  peas = "peas",
  cabbage = "cabbage",
  cherries = "cherries",
  banana = "banana",
  pumpkin = "pumpkin",
  eggplant = "eggplant",
  artichoke = "artichoke",
  kiwi = "kiwi",
  watermelon = "watermelon",
  pear = "pear",
  olives = "olives",
  grapes = "grapes",
  corn = "corn",
  herb = "herb",
}

registerEnumType(SVGUsed, {
  name: "SVGUsed",
  description: "SVG in collection used to represent the plant.",
});
