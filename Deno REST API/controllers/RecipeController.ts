import { RouterContext } from "https://deno.land/x/oak@v5.3.1/mod.ts";
import RecipeService from "../services/RecipeService.ts";

const recipeService = new RecipeService();

export const getRecips = async (context: RouterContext) => {
  context.response.body = await recipeService.getRecips();
};

export const createRecipe = async (context: RouterContext) => {
  const { request, response } = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalide Data" };
    return;
  }

  const {
    value: { title, description, ingredients },
  } = await request.body();

  const recipeId = await recipeService.createRecipe({
    title,
    description,
    ingredients,
  });

  response.body = { msg: "Recipe Created ", recipeId };
};
