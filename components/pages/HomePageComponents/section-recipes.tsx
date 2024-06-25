import { BookOpenIcon, CalendarDaysIcon, StarIcon } from "lucide-react";
import { Card, CardContent } from "../../ui/card";
import Image from "next/image";

export default function SectionRecipes(){
  return(
    <main>
      <section className="py-12 md:py-16">
          <div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
            <div className="grid gap-4">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Receitas Populares</h2>
              <p className="text-gray-500 dark:text-gray-400">Explore nossa coleção de deliciosas receitas</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
                <Image
                  alt="Dish 1"
                  className="h-40 w-full rounded-t-lg object-cover"
                  height={200}
                  src="/place.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Seared Scallops</h3>
                  <p className="text-gray-500 dark:text-gray-400">Tender scallops in a lemon-butter sauce.</p>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Image
                  alt="Dish 1"
                  className="h-40 w-full rounded-t-lg object-cover"
                  height={200}
                  src="/place.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Beef Wellington</h3>
                  <p className="text-gray-500 dark:text-gray-400">Tender beef wrapped in flaky pastry.</p>
                </CardContent>
              </Card >
              <Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Image
                  alt="Dish 1"
                  className="h-40 w-full rounded-t-lg object-cover"
                  height={200}
                  src="/place.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Roasted Salmon</h3>
                  <p className="text-gray-500 dark:text-gray-400">Perfectly cooked salmon with a crispy skin.</p>
                </CardContent>
              </Card>
              <Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Image
                  alt="Dish 1"
                  className="h-40 w-full rounded-t-lg object-cover"
                  height={200}
                  src="/place.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-lg font-semibold">Truffle Risotto</h3>
                  <p className="text-gray-500 dark:text-gray-400">Creamy risotto infused with the aroma of truffles.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
       {/*  */}
    </main>
  )
}