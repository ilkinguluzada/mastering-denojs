import { Router } from "https://deno.land/x/oak@v5.3.1/mod.ts";
import { getRecips, createRecipe } from "./controllers/RecipeController.ts";

const router = new Router();

router.get("/recips", getRecips).post("/recips", createRecipe);

export default router;
