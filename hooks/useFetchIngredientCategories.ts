'use client'
import { useIngredientCategoriesContext } from '@/contexts/IngredientCategoryContext'
import { useEffect, useState } from 'react'

const useFetchIngredientCategories = () => {
  const { setIngredientCategories } = useIngredientCategoriesContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchIngredientCategory = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + '/ingredient_categories',
        )

        if (!response.ok) {
          throw new Error('Erro ao buscar dados das receitas')
        }

        const data = await response.json()
        const allCategory = { id: 'all', name: 'Todos' }

        setIngredientCategories([allCategory, ...data])
      } catch (error) {
        console.log('Error ao buscar receitas:', error)
        setError('Erro ao buscar receitas')
      } finally {
        setLoading(false)
      }
    }
    fetchIngredientCategory()
  }, [setIngredientCategories])
  return { loading, error }
}

export default useFetchIngredientCategories
