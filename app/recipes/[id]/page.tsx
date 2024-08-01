'use client'
import Image from 'next/image'
import { Recipe } from '@/types/types'
import { GetRecipeById } from '@/hooks/getRecipeById'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from 'lucide-react'
export default function RecipePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const recipe: Recipe | undefined = GetRecipeById(params.id as string)

  if (!recipe) {
    return <div>Carregando...</div>
  }
  return (
    <div className="container mx-auto px-4 py-3">
        <button
      onClick={() => router.back()}
      className="flex items-center justify-center w-16 h-16 text-black hover:cursor-pointer focus:outline-none  transition-transform transform hover:scale-110 active:scale-95"
    >
      <ArrowLeftIcon className="w-8 h-8" />
    </button>
      <div className="container mx-auto px-4 py-3 ">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl text-center pb-4 font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl">
            {recipe.name}
          </h2> 
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
          <div className="md:ml-10 ">
            <Image
              alt={recipe.description}
              className="h-full w-full rounded-lg object-cover"
              height={600}
              src={recipe.imageUrl}
              style={{
                aspectRatio: '800/600',
                objectFit: 'cover',
              }}
              width={800}
            />
          </div>
          <div className="ml-10 col-span-2 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                Ingredients
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                {recipe.recipeIngredients.map((recipeIngredient, index) => (
                  
                  <li key={index}>
                    {recipeIngredient.quantity} {recipeIngredient.ingredient.unit} - {recipeIngredient.ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                Instructions
              </h3>
              <ol className="mt-4 space-y-2 text-gray-600 dark:text-gray-400 ">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        {/* <div className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
            Reviews
          </h3>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    John Doe
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
