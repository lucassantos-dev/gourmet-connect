"use client"
import FilterSelect from "@/components/common/FilterSelect"
import InputFilter from "@/components/common/InputFilter"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { SearchIcon } from "lucide-react"
import { useIngredientCategoriesContext } from "@/contexts/IngredientCategoryContext"
import { useIngredientContext } from "@/contexts/IngredientsContext"
import useFetcherIngredients from "@/hooks/useFetcherIngredients"
import useFetchIngredientCategories from "@/hooks/useFetchIngredientCategories"
import type { Ingredient } from "@/types/types"
import CardSkeleton from "@/components/common/Skeleton/CardPageSkeleton"
import gsap from "gsap"

export default function Page() {
	const { ingredients } = useIngredientContext()
	const { error, loading } = useFetcherIngredients()
	const { ingredientCategories } = useIngredientCategoriesContext()
	useFetchIngredientCategories()

	const [filteredIngredient, setFilteredIngredient] = useState<Ingredient[]>([])
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const cardRefs = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		let filtered = ingredients

		if (selectedCategory && selectedCategory !== "todos") {
			filtered = filtered.filter((ingredient) =>
				ingredient.categories.some(
					(category) => category.name.toLowerCase() === selectedCategory,
				),
			)
		}

		if (searchTerm) {
			filtered = filtered.filter((ingredient) =>
				ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
		}
		setFilteredIngredient(filtered)
	}, [ingredients, selectedCategory, searchTerm])

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const cards = cardRefs.current

		// Animação dos cartões ao entrar na tela
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
		)
	}, [filteredIngredient])

	const handleFilterChange = () => {
		let filtered = ingredients

		if (selectedCategory && selectedCategory !== "todos") {
			filtered = filtered.filter((ingredient) =>
				ingredient.categories.some(
					(category) => category.name.toLowerCase() === selectedCategory,
				),
			)
		}

		if (searchTerm) {
			filtered = filtered.filter((ingredient) =>
				ingredient.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
		}

		setFilteredIngredient(filtered)
	}

	return (
		<main className="w-full max-w-6xl mx-auto px-4 md:px-2 py-12 md:py-8">
			<div className="flex flex-col md:flex-row items-center justify-between mb-8">
				<div className="space-y-2">
					<h1 className="text-3xl md:text-4xl mb-4 font-bold">
						Glossário de Ingredientes
					</h1>
					<p className="text-gray-500 dark:text-gray-400 hidden md:block">
						Explore nosso guia completo de ingredientes culinários
					</p>
				</div>
				<div className="mb-8 md:mb-10 lg:mb-3">
					<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div className="flex flex-wrap items-center gap-4">
							<FilterSelect
								placeholder="Categorias"
								options={ingredientCategories}
								onChange={(value) => setSelectedCategory(value)}
							/>
							<InputFilter
								placeholder="Pesquise por nome"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<Button className="mx-2" size="sm" onClick={handleFilterChange}>
							<SearchIcon className="mr-2 h-4 w-4" />
							Pesquise
						</Button>
					</div>
				</div>
			</div>

			{loading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Array.from({ length: 6 }).map((_, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<CardSkeleton key={index} />
					))}
				</div>
			) : error ? (
				<p className="text-red-500">
					Erro ao carregar ingredientes. Tente novamente mais tarde.
				</p>
			) : filteredIngredient.length === 0 ? (
				<p className="text-gray-600 dark:text-gray-400 mt-8 sm:mt-4">
					Nenhum ingrediente encontrado.
				</p>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredIngredient.map((ingredient: Ingredient, index) => (
						<Link
							key={ingredient.id}
							href={`/ingredients-glossary/${ingredient.id}`}
						>
							<div
								ref={(el) => {
									if (el) cardRefs.current[index] = el
								}}
								className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
							>
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
											<h3 className="text-sm font-medium mb-1">Origem</h3>
											<p className="text-gray-500 dark:text-gray-400">
												{ingredient.origin.name}
											</p>
										</div>
										<div>
											<h3 className="text-sm font-medium mb-1">
												Usos Culinários
											</h3>
											<p className="text-gray-500 dark:text-gray-400">
												{ingredient.recipes?.map((recipe) => (
													<span key={recipe.id}>{recipe.name}</span>
												))}
											</p>
										</div>
										<div>
											<h3 className="text-sm font-medium mb-1">Substitutos</h3>
											<p className="text-gray-500 dark:text-gray-400">
												{ingredient.substitutes?.map((ingre: Ingredient) => (
													<span key={ingre.id}>{ingre.name}</span>
												))}
											</p>
										</div>
										<div>
											<h3 className="text-sm font-medium mb-1">Categoria</h3>
											<p className="text-gray-500 dark:text-gray-400">
												{ingredient.categories
													.map((category) => category.name)
													.join(", ")}
											</p>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
		</main>
	)
}
