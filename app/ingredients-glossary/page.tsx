'use client'
import FilterSelect from "@/components/common/FilterSelect";
import InputFilter from "@/components/common/InputFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIngredientCategoriesContext } from "@/contexts/IngredientCategoryContext";
import { useIngredientContext } from "@/contexts/IngredientsContext";
import useFetcherIgredients from '@/hooks/useFetcherIgredients'
import useFetchIngredientCategories from "@/hooks/useFetchIngredientCategories";
import { Ingredient } from "@/types/types";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function page(){
  const {ingredients} = useIngredientContext()
   useFetcherIgredients()
   const { ingredientCategories } = useIngredientCategoriesContext()
   useFetchIngredientCategories()
   const [filteredIngredient, setFilteredIngredient] = useState<Ingredient[]>([])
   const [searchTerm, setSearchTerm] = useState<string>('')
 
   const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
   useEffect(() => {
     let filtered = ingredients
 
   if (selectedCategory && selectedCategory !== 'todos') {
     filtered = filtered.filter((ingredient) =>
      ingredient.categories.some(
         (category) => category.name.toLowerCase() === selectedCategory,
       ),
     )
   }
 
   if (searchTerm) {
     filtered = filtered.filter((recipe) =>
       recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
     )
   }
     setFilteredIngredient(ingredients)
   }, [ingredients, selectedCategory, searchTerm])
 
   const handleFilterChange = () => {
     let filtered = ingredients
   
     if (selectedCategory && selectedCategory !== 'todos') {
       filtered = filtered.filter((ingredient) =>
        ingredient.categories.some(
           (category) => category.name.toLowerCase() === selectedCategory,
         ),
       )
     }
   
     if (searchTerm) {
       filtered = filtered.filter((recipe) =>
         recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
       )
     }
   
     setFilteredIngredient(filtered)
   }
  return(
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Ingredients Glossary</h1>
          <p className="text-gray-500 dark:text-gray-400">Explore our comprehensive guide to culinary ingredients.</p>
        </div>
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <FilterSelect
                placeholder="Categorias"
                options={ingredientCategories}
                onChange={(value) => setSelectedCategory(value)}
              />
              <InputFilter
              placeholder="Search by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <Button size="sm" onClick={handleFilterChange}>
              <SearchIcon className="mr-2 h-4 w-4" />
              Search Recipes
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIngredient.map((ingredient:Ingredient)=>(
            <Link href={'/ingredients-glossary/' + ingredient.id}>
          <div key={ingredient.id} className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src={ingredient.imageUrl}
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">{ingredient.name}</h2>
            <p className="text-gray-500 dark:text-gray-400">
             {ingredient.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">{ingredient.origin.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {ingredient.recipes.map((recipe)=>(
                   <span key={recipe.id}>{recipe.name}</span>
                ))}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">
                {ingredient.substitutes.map((ingre:Ingredient)=>(
                  <span key={ingre.id}>{ingre.name}</span>
                ))}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Categoria</h3>
                <p className="text-gray-500 dark:text-gray-400">
                   {ingredient.categories.map((category) => category.name).join(', ')}
                </p>

              </div>
            </div>
          </div>
        </div>
        </Link>
        ))}
      </div>
    </main>
  )
}