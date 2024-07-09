'use client'
import { useRecipeCategoriesContext } from '@/contexts/RecipeCategory'
import { useEffect, useState } from 'react'

const useFetchRecipesCategories = () => {
  const { setRecipeCategories } = useRecipeCategoriesContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipesCategory = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + '/ingredient_categories',
        )

        if (!response.ok) {
          throw new Error('Erro ao buscar dados das receitas')
        }

        const data = await response.json()
        const allCategory = { id: 'all', name: 'Todos' }

        setRecipeCategories([allCategory, ...data])
      } catch (error) {
        console.log('Error ao buscar receitas:', error)
        setError('Erro ao buscar receitas')
      } finally {
        setLoading(false)
      }
    }
    fetchRecipesCategory()
  }, [setRecipeCategories])
  return { loading, error }
}

export default useFetchRecipesCategories
