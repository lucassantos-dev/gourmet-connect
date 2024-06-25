import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";

export default function page(){
  return(
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Meal Generator</h1>
            <p className="text-gray-500 dark:text-gray-400">Find the perfect meal based on your preferences.</p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="flavor">Flavor Preferences</Label>
              <Select  defaultValue="all" >
                <SelectTrigger>
                  <SelectValue placeholder="Select flavor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Flavors</SelectItem>
                  <SelectItem value="savory">Savory</SelectItem>
                  <SelectItem value="sweet">Sweet</SelectItem>
                  <SelectItem value="spicy">Spicy</SelectItem>
                  <SelectItem value="tangy">Tangy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="diet">Dietary Restrictions</Label>
              <Select defaultValue="none" >
                <SelectTrigger>
                  <SelectValue placeholder="Select dietary restrictions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="gluten-free">Gluten-Free</SelectItem>
                  <SelectItem value="dairy-free">Dairy-Free</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Cooking Time</Label>
              <Select  defaultValue="30" >
                <SelectTrigger>
                  <SelectValue placeholder="Select cooking time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes or less</SelectItem>
                  <SelectItem value="30">30 minutes or less</SelectItem>
                  <SelectItem value="60">60 minutes or less</SelectItem>
                  <SelectItem value="90">90 minutes or less</SelectItem>
                  <SelectItem value="120">120 minutes or less</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" type="submit">
              Generate Meal
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View Recipe</span>
              </Link>
              <Image
                alt="Recipe Image"
                className="object-cover w-full h-48 group-hover:opacity-50 transition-opacity"
                height={300}
                src="/place.png
                "
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg tracking-tight">Grilled Salmon with Lemon Herb Butter</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  Tender salmon fillets grilled to perfection and topped with a zesty lemon herb butter.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View Recipe</span>
              </Link>
              <Image
                alt="Recipe Image"
                className="object-cover w-full h-48 group-hover:opacity-50 transition-opacity"
                height={300}
                src="/place.png
                "
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg tracking-tight">Creamy Mushroom Risotto</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  A rich and creamy risotto made with earthy mushrooms and parmesan cheese.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View Recipe</span>
              </Link>
              <Image
                alt="Recipe Image"
                className="object-cover w-full h-48 group-hover:opacity-50 transition-opacity"
                height={300}
                src="/place.png
                "
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg tracking-tight">Vegetable Stir-Fry with Tofu</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  A colorful and flavorful stir-fry with fresh vegetables and crispy tofu.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View Recipe</span>
              </Link>
              <Image
                alt="Recipe Image"
                className="object-cover w-full h-48 group-hover:opacity-50 transition-opacity"
                height={300}
                src="/place.png
                "
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg tracking-tight">Chocolate Lava Cake</h3>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                  A decadent and indulgent chocolate cake with a molten center.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-full max-w-md" variant="outline">
              Provide Feedback
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}