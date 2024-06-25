import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image src="/banner.jpg"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        quality={100} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b 
          from-transparent to-gray-900/50 px-4 text-center text-white md:px-6">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Bem-vindo ao Gourmet Connect</h1>
        <p className="max-w-md text-lg">
          Descubra um mundo de excelência culinária com nossas vasta coleção de receitas e avaliações de restaurantes.
        </p>
        <div className="flex gap-2">
          <Button className="bg-green-500 hover:bg-green-600" >
            Ver Receitas
          </Button>
          <Button className="border-white text-black hover:bg-slate-200 hover:text-gray-900" variant="outline">
            Ver Ingredientes
          </Button>
        </div>
      </div>
    </section>
  )
}