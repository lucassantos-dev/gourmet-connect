'use client'
import { useRecipeContext } from '@/contexts/RecipeContext'
import useFetchRecipes from './useFetchRecipes'

export const GetRecipeById = (id: string) => {
  useFetchRecipes()
  const { recipes } = useRecipeContext()
  if (!recipes) {
    throw new Error('Recipes context not available')
  }
  const recipe = recipes.find((recipe) => recipe.id === id)

  return recipe
}
