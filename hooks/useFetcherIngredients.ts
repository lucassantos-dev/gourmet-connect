'use client'
import { useIngredientContext } from '@/contexts/IngredientsContext'
import { useEffect, useState } from 'react'

const useFetchIngredient = () => {
  const { setIngredients } = useIngredientContext()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/ingredients`,
        )
        if (!response.ok) {
          throw new Error('Erro ao buscar dados dos ingredientes')
        }
        const data = await response.json()
        setIngredients(data)
      } catch (error) {
        console.log('Error ao buscar receitas:', error)
        setError('Erro ao buscar receitas')
      } finally {
        setLoading(false)
      }
    }
    fetchIngredient()
  }, [setIngredients])
  return { loading, error }
}
export default useFetchIngredient
