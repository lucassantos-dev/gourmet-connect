"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetClose,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import { Button } from "../ui/button"

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	// Função para fechar o menu
	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<nav className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link className="flex items-center gap-2 font-semibold" href="/">
					<Image src="/logo.svg" width={35} alt="Logo" height={35} />
					<span className="text-lg">Gourmet Connect</span>
				</Link>
				<nav className="hidden md:flex space-x-9">
					<Link
						className="transition-colors duration-300 ease-in-out hover:text-green-500 hover:bg-gray-100"
						href="/recipes"
					>
						Receitas
					</Link>
					<Link
						className="transition-colors duration-300 ease-in-out hover:text-green-500 hover:bg-gray-100"
						href="/ingredients-glossary"
					>
						Glossário de Ingredientes
					</Link>
				</nav>
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								className="rounded-full"
								size="icon"
								variant="ghost"
								onClick={toggleMenu}
							>
								<MenuIcon className="h-6 w-6" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent className="bg-slate-50 p-6 shadow-2xl" side="left">
							<nav className="grid mt-4 gap-4 content-center">
								<SheetClose asChild>
									<Link
										className="flex bg-white shadow-sm items-center gap-3 rounded-md py-2 px-3 text-sm font-medium text-black transition-colors duration-300 ease-in-out hover:text-green-500 hover:bg-gray-100"
										href="/recipes"
										onClick={closeMenu}
									>
										Receitas
									</Link>
								</SheetClose>
								<SheetClose asChild>
									<Link
										className="flex bg-white shadow-sm items-center gap-3 rounded-md py-2 px-3 text-sm font-medium text-black transition-colors duration-300 ease-in-out hover:text-green-500 hover:bg-gray-100"
										href="/ingredients-glossary"
										onClick={closeMenu}
									>
										Glossário de Ingredientes
									</Link>
								</SheetClose>
								{/* <Button
									className="mt-4 md:hidden"
									size="sm"
									variant="outline"
									onClick={closeMenu} // Fechar o menu quando o link é clicado
								>
									Login
								</Button> */}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</nav>
	)
}
