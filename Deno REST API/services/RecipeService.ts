import RecipeRepository from "../repositories/RecipeRepository.ts";
import IRecipe from "../entities/IRecipe.ts";

class RecipeService {
  constructor() {}

  readonly recipeRepository = new RecipeRepository();

  getRecips = async () => {
    return await this.recipeRepository.find();
  };

  createRecipe = async (recipe: IRecipe) => {
    return await this.recipeRepository.insertOne(recipe);
  };
}

export default RecipeService;
