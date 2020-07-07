import db from "../db/mongo.ts";
import IRecipe from "../entities/IRecipe.ts";

class RecipeRepository {
  constructor() {}

  readonly receipeCollection = db.collection("recips");

  async find() {
    const recips = await this.receipeCollection.find();
    return recips;
  }

  async insertOne(recipe: IRecipe) {
    const { $oid } = await this.receipeCollection.insertOne(recipe);
    return $oid;
  }
}

export default RecipeRepository;
