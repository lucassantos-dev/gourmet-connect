import { Dispatch, SetStateAction } from 'react'

export interface DefaultType {
  id: string
  name: string
}

export interface Difficulty extends DefaultType {}

export interface RecipeCategories extends DefaultType {}
// Recipe
export interface Recipe {
  id: string
  ingredients: string
  title: string
  instructions: string[]
  prepTime: number
  difficulty: Difficulty
  imageUrl: string
  categories: RecipeCategories[]
  description: string
}
export interface RecipeContextType {
  recipes: Recipe[]
  setRecipes: Dispatch<SetStateAction<Recipe[]>>
  addRecipe: (newRecipe: Recipe) => void
}
// Categories
export interface RecipeCategoriesType {
  recipeCategories: RecipeCategories[]
  setRecipeCategories: Dispatch<SetStateAction<RecipeCategories[]>>
  addRecipeCategory: (newCategory: RecipeCategories) => void
}
