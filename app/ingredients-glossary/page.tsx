import { Input } from "@/components/ui/input";
import Image from "next/image";


export default function page(){
  return(
    <main className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Ingredients Glossary</h1>
          <p className="text-gray-500 dark:text-gray-400">Explore our comprehensive guide to culinary ingredients.</p>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <Input className="w-full md:w-[300px]" placeholder="Search ingredients..." type="search" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Avocado</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Avocados are a nutrient-dense fruit that originated in Mexico. They are known for their creamy texture and
              rich, buttery flavor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">Mexico</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Guacamole, salads, sandwiches, dips</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Butter, olive oil, tahini</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Basil</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Basil is an aromatic herb native to Southeast Asia. It has a sweet, slightly peppery flavor and is
              commonly used in Italian and Thai cuisines.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">Southeast Asia</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Pesto, pasta dishes, salads, pizza</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Parsley, cilantro, oregano</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Cinnamon</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Cinnamon is a spice derived from the inner bark of several tree species native to Southeast Asia. It has a
              warm, sweet, and slightly woody flavor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">Southeast Asia</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Baked goods, curries, hot beverages, desserts</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Nutmeg, allspice, ginger</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Garlic</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Garlic is a pungent bulb that is a staple in many cuisines around the world. It has a strong, savory
              flavor and is known for its health benefits.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">Central Asia</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Sauces, marinades, roasted dishes, soups</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Onion, shallot, garlic powder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Honey</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Honey is a sweet, viscous liquid produced by bees from the nectar of flowers. It has a variety of culinary
              and medicinal uses.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">Global</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Baking, marinades, dressings, sweetener</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Maple syrup, agave nectar, molasses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Olive Oil</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Olive oil is a versatile cooking oil extracted from the fruit of olive trees. It has a rich, fruity flavor
              and is a staple in Mediterranean cuisine.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">Mediterranean region</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Salad dressings, sautéing, roasting, baking</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Avocado oil, grapeseed oil, coconut oil</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
          <Image
            alt="Ingredient Image"
            className="w-full h-48 object-cover"
            height={300}
            src="/place.png"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width={400}
          />
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold">Turmeric</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Turmeric is a vibrant yellow spice derived from the rhizome of a plant in the ginger family. It has a
              warm, earthy flavor and is widely used in Indian and Middle Eastern cuisines.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-1">Origin</h3>
                <p className="text-gray-500 dark:text-gray-400">South Asia</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Culinary Uses</h3>
                <p className="text-gray-500 dark:text-gray-400">Curries, rice dishes, marinades, mustards</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Substitutes</h3>
                <p className="text-gray-500 dark:text-gray-400">Saffron, paprika, ginger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}