import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

export default function page() {
  return(
      <>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
            Gourmet Connect
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Discover a world of culinary excellence with our collection of gourmet recipes.
          </p>
        </div>
        <div className="mb-8 md:mb-10 lg:mb-12">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="appetizers">Appetizers</SelectItem>
                  <SelectItem value="entrees">Entrees</SelectItem>
                  <SelectItem value="desserts">Desserts</SelectItem>
                  <SelectItem value="salads">Salads</SelectItem>
                  <SelectItem value="soups">Soups</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Dish Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                  <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                  <SelectItem value="seafood">Seafood</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Prep Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30-minutes">30 Minutes or Less</SelectItem>
                  <SelectItem value="1-hour">1 Hour or Less</SelectItem>
                  <SelectItem value="2-hours">2 Hours or Less</SelectItem>
                  <SelectItem value="3-hours">3 Hours or Less</SelectItem>
                  <SelectItem value="4-hours">4 Hours or Less</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="sm">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search Recipes
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Salad"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Salad</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A fresh and flavorful salad with a variety of seasonal ingredients.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Pasta"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Pasta</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A delectable pasta dish with a rich, creamy sauce and fresh ingredients.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Dessert"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Dessert</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A decadent and indulgent dessert that will satisfy any sweet tooth.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Seafood"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Seafood</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A delightful seafood dish with a unique blend of flavors and textures.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Appetizer"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Appetizer</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A delectable appetizer that will tantalize your taste buds.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Entree"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Entree</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A delicious and satisfying main dish that will impress your guests.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Soup"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Soup</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A warm and comforting soup that will nourish your soul.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Recipe</span>
            </Link>
            <Image
              alt="Gourmet Dessert"
              className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="/place.png"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width={600}
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Gourmet Dessert</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                A decadent and indulgent dessert that will satisfy any sweet tooth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-4xl">
            Gourmet Delight: Chocolate Lava Cake
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              alt="Chocolate Lava Cake"
              className="h-full w-full rounded-lg object-cover"
              height={600}
              src="/place.png"
              style={{
                aspectRatio: "800/600",
                objectFit: "cover",
              }}
              width={800}
            />
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">Ingredients</h3>
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">Instructions</h3>
              <ol className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
                <li>1. Preheat the oven to 450°F. Grease four 6-ounce ramekins and dust with cocoa powder.</li>
                <li>
                  2. In a medium heatproof bowl, combine the chopped chocolate and butter. Set the bowl over a saucepan
                  of simmering water and stir occasionally until the chocolate and butter are melted and smooth. Remove
                  from the heat and let cool slightly.
                </li>
                <li>
                  3. In a medium bowl, whisk together the sugar, eggs, and egg yolks until well combined. Slowly whisk
                  in the chocolate mixture, then fold in the flour and salt until just combined.
                </li>
                <li>
                  4. Divide the batter evenly among the prepared ramekins. Bake for 8 to 10 minutes, until the edges are
                  set but the centers are still soft.
                </li>
                <li>
                  5. Carefully run a knife around the edges of the ramekins and invert the cakes onto plates. Dust with
                  powdered sugar and serve immediately.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 sm:text-2xl">Reviews</h3>
          <div className="mt-6 space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">John Doe</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
)
}