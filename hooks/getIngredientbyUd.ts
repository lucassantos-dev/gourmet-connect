'use client'
import { useIngredientContext } from '@/contexts/IngredientsContext'
import useFetchIgredients from './useFetcherIgredients'

export const GetIgredientsById = (id: string) => {
  useFetchIgredients()
  const { ingredients } = useIngredientContext()
  if (!ingredients) {
    throw new Error('Recipes context not available')
  }
  const ingredient = ingredients.find((ingredient) => ingredient.id === id)

  return ingredient
}
