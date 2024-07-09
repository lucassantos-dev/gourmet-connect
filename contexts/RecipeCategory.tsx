'use client'

import { RecipeCategoriesType, RecipeCategories } from '@/types/types'
import { createContext, ReactNode, useContext, useState } from 'react'

const RecipeCategoryContext = createContext<RecipeCategoriesType | undefined>(
  undefined,
)
export default function RecipeCategoriesProvider({
  children,
}: {
  children: ReactNode
}) {
  const [recipeCategories, setRecipeCategories] = useState<RecipeCategories[]>(
    [],
  )
  const addRecipeCategory = (newRecipeCategory: RecipeCategories) => {
    setRecipeCategories([...recipeCategories, newRecipeCategory])
  }
  return (
    <RecipeCategoryContext.Provider
      value={{ recipeCategories, setRecipeCategories, addRecipeCategory }}
    >
      {children}
    </RecipeCategoryContext.Provider>
  )
}
export const useRecipeCategoriesContext = (): RecipeCategoriesType => {
  const context = useContext(RecipeCategoryContext)
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider')
  }
  return context
}
