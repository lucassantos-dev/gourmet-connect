'use client'

import { IngredientCategoriesType, IngredientCategories } from '@/types/types'
import { createContext, ReactNode, useContext, useState } from 'react'

const IngredientCategoryContext = createContext<IngredientCategoriesType | undefined>(
  undefined,
)
export default function IngredientCategoriesProvider({
  children,
}: {
  children: ReactNode
}) {
  const [ingredientCategories, setIngredientCategories] = useState<IngredientCategories[]>(
    [],
  )
  const addIngredientCategory = (newIngredientCategory: IngredientCategories) => {
    setIngredientCategories([...ingredientCategories, newIngredientCategory])
  }
  return (
    <IngredientCategoryContext.Provider
      value={{ ingredientCategories, setIngredientCategories, addIngredientCategory }}
    >
      {children}
    </IngredientCategoryContext.Provider>
  )
}
export const useIngredientCategoriesContext = (): IngredientCategoriesType => {
  const context = useContext(IngredientCategoryContext)
  if (!context) {
    throw new Error('useIngredientContext must be used within a IngredientProvider')
  }
  return context
}
