'use client'
import Image from 'next/image'
import { Recipe } from '@/types/types'
import { GetRecipeById } from '@/hooks/getRecipeById'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe: Recipe | undefined = GetRecipeById(params.id as string)
  if (!recipe) {
    return <div>Carregando...</div>
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl">
            Gourmet Delight: Chocolate Lava Cake
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
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
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                Ingredients
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                <li>- 4 ounces bittersweet chocolate, chopped</li>
                <li>- 1/2 cup unsalted butter</li>
                <li>- 1/4 cup granulated sugar</li>
                <li>- 2 large eggs</li>
                <li>- 2 large egg yolks</li>
                <li>- 2 tablespoons all-purpose flour</li>
                <li>- Pinch of salt</li>
                <li>- Powdered sugar, for dusting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">
                Instructions
              </h3>
              <ol className="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
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
        </div>
      </div>
    </div>
  )
}
