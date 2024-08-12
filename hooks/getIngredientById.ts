'use client'
import { useIngredientContext } from '@/contexts/IngredientsContext'
import useFetchIngredients from './useFetcherIngredients'

export const GetIngredientsById = (id: string) => {
  useFetchIngredients()
  const { ingredients } = useIngredientContext()
  if (!ingredients) {
    throw new Error('Recipes context not available')
  }
  const ingredient = ingredients.find((ingredient) => ingredient.id === id)

  return ingredient
}
