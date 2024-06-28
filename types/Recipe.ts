import { Dispatch, SetStateAction } from "react";
import { Difficulty } from "./Difficulty";
import { RecipeCategories } from "./RecipeCategories";

export interface Recipe{
  id: number;
  title: string;
  instructions: string;
  prepTime: number;
  difficulty: Difficulty;
  imageUrl: string;
  categories: RecipeCategories
  description: string
}
export interface RecipeContextType {
  recipes: Recipe[];
  setRecipes: Dispatch<SetStateAction<Recipe[]>>;
  addRecipe: (newRecipe: Recipe) => void;
}