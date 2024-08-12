'use client'
import { useRecipeContext } from '@/contexts/RecipeContext'
import { useEffect, useState } from 'react'

const useFetchRecipes = () => {
  const { setRecipes } = useRecipeContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + '/recipes',
        )
        if (!response.ok) {
          throw new Error('Erro ao buscar dados das receitas')
        }
        const data = await response.json()
        setRecipes(data)
      } catch (error) {
        console.log('Error ao buscar receitas:', error)
        setError('Erro ao buscar receitas')
      } finally {
        setLoading(false)
      }
    }
    fetchRecipes()
  }, [setRecipes])
  return {
    loading,
    error
  }
}
export default useFetchRecipes
