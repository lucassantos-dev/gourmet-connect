import type { Dispatch, SetStateAction } from "react"

export interface DefaultType {
	id: string
	name: string
}

export interface Difficulty extends DefaultType {}

export interface RecipeCategories extends DefaultType {}
export interface IngredientCategories extends DefaultType {}

export interface Origin extends DefaultType {
	description: string
}
export interface Category extends DefaultType {}
export interface Ingredient {
	id: string
	name: string
	imageUrl: string
	description: string
	unit: string
	origin: Origin
	categories: Category[]
	substitutes: Ingredient[]
	recipes: DefaultType[]
}
export interface RecipeIngredients {
	id: string
	quantity: number
	ingredient: Ingredient
}
// Recipe
export interface Recipe {
	id: string
	name: string
	instructions: string[]
	prepTime: number
	difficulty: Difficulty
	imageUrl: string
	categories: RecipeCategories[]
	description: string
	ingredients: RecipeIngredients[]
}
export interface RecipeContextType {
	recipes: Recipe[]
	setRecipes: Dispatch<SetStateAction<Recipe[]>>
	addRecipe: (newRecipe: Recipe) => void
}
export interface IngredientContextType {
	ingredients: Ingredient[]
	setIngredients: Dispatch<SetStateAction<Ingredient[]>>
	addIngredient: (newIngredient: Ingredient) => void
}
// Categories
export interface RecipeCategoriesType {
	recipeCategories: RecipeCategories[]
	setRecipeCategories: Dispatch<SetStateAction<RecipeCategories[]>>
	addRecipeCategory: (newCategory: RecipeCategories) => void
}
export interface IngredientCategoriesType {
	ingredientCategories: IngredientCategories[]
	setIngredientCategories: Dispatch<SetStateAction<IngredientCategories[]>>
	addIngredientCategory: (newCategory: IngredientCategories) => void
}
