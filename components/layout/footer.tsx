import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bg-gray-900 py-8 text-white">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" width={40} alt={''} height={30} />
          <span className="text-lg">Gourmet Connect</span>
        </div>
        <nav className="flex gap-4 text-sm">
          <Link className="hover:text-green-500" href="#">
            Receitas
          </Link>
          <Link className="hover:text-green-500" href="#">
            Restaurantes
          </Link>
          <Link className="hover:text-green-500" href="#">
            Planejamento de refeições
          </Link>
          <Link className="hover:text-green-500" href="#">
            Glossário de Ingredientes
          </Link>
        </nav>
        <p className="text-sm text-gray-400">
          © 2024 Gourmet Connect. All rights reserved.
        </p>
      </div>
    </div>
  )
}
