'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Recipe, RecipeContextType } from '@/types/types'

const RecipeContext = createContext<RecipeContextType | undefined>(undefined)

export default function RecipeProvider({ children }: { children: ReactNode }) {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  const addRecipe = (newRecipe: Recipe) => {
    setRecipes([...recipes, newRecipe])
  }

  return (
    <RecipeContext.Provider value={{ recipes, setRecipes, addRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}

export const useRecipeContext = (): RecipeContextType => {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider')
  }
  return context
}
