"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import useFetchRecipes from "@/hooks/useFetchRecipes"
import { useRecipeContext } from "@/contexts/RecipeContext"
import FilterSelect from "@/components/common/FilterSelect"
import { useRecipeCategoriesContext } from "@/contexts/RecipeCategory"
import useFetchRecipesCategories from "@/hooks/useFetchRecipesCategories"
import type { Recipe } from "@/types/types"
import { useEffect, useRef, useState } from "react"
import InputFilter from "@/components/common/InputFilter"
import CardSkeleton from "@/components/common/Skeleton/CardPageSkeleton"
import gsap from "gsap"

export default function Page() {
	const { recipes } = useRecipeContext()
	const { error, loading } = useFetchRecipes()
	const { recipeCategories } = useRecipeCategoriesContext()
	useFetchRecipesCategories()

	const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
	const [searchTerm, setSearchTerm] = useState<string>("")
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	const cardRefs = useRef<HTMLDivElement[]>([])

	useEffect(() => {
		let filtered = recipes

		if (selectedCategory && selectedCategory !== "todos") {
			filtered = filtered.filter((recipe) =>
				recipe.categories.some(
					(category) => category.name.toLowerCase() === selectedCategory,
				),
			)
		}

		if (searchTerm) {
			filtered = filtered.filter((recipe) =>
				recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
		}
		setFilteredRecipes(filtered)
	}, [recipes, selectedCategory, searchTerm])

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const cards = cardRefs.current

		// Animação dos cartões ao entrar na tela
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
		)
	}, [filteredRecipes])

	const handleFilterChange = () => {
		let filtered = recipes

		if (selectedCategory && selectedCategory !== "todos") {
			filtered = filtered.filter((recipe) =>
				recipe.categories.some(
					(category) => category.name.toLowerCase() === selectedCategory,
				),
			)
		}

		if (searchTerm) {
			filtered = filtered.filter((recipe) =>
				recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
			)
		}

		setFilteredRecipes(filtered)
	}

	return (
		<>
			<div className="w-full max-w-6xl mx-auto px-4 md:px-2 py-12 md:py-8">
				<div className="mb-8 md:mb-10 lg:mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
						Descubra novas Receitas
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-400 hidden md:block">
						Descubra um mundo de excelência gastronômica com nossa coleção de
						receitas
					</p>
				</div>
				<div className="mb-8 md:mb-10 lg:mb-12">
					<div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div className="flex flex-wrap items-center gap-4">
							<FilterSelect
								placeholder="Categorias"
								options={recipeCategories}
								onChange={(value) => setSelectedCategory(value)}
							/>
							<InputFilter
								placeholder="Pesquise por Receitas"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<Button size="sm" onClick={handleFilterChange}>
							<SearchIcon className="mr-2 h-4 w-4" />
							Pesquisar
						</Button>
					</div>
				</div>

				{loading ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1">
						{Array.from({ length: 8 }).map((_, index) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<CardSkeleton key={index} />
						))}
					</div>
				) : error ? (
					<p className="text-red-500">
						Erro ao carregar receitas. Tente novamente mais tarde.
					</p>
				) : filteredRecipes.length === 0 ? (
					<p className="text-gray-600 dark:text-gray-400 my-10 sm:my-2 ">
						Nenhuma receita encontrada.
					</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1">
						{filteredRecipes.map((recipe: Recipe, index) => (
							<div
								ref={(el) => {
									if (el) cardRefs.current[index] = el
								}}
								key={recipe.id}
								className="grid grid-cols-1 p-5"
							>
								<div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
									<Link
										className="absolute inset-0 z-10"
										href={`/recipes/${recipe.id}`}
									>
										<span className="sr-only">Ver Receita</span>
									</Link>
									<Image
										alt={recipe.description}
										className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
										height={400}
										src={recipe.imageUrl}
										style={{
											aspectRatio: "600/400",
											objectFit: "cover",
										}}
										width={600}
									/>
									<div className="bg-white p-4 dark:bg-gray-950">
										<h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
											{recipe.name}
										</h3>
										<p className="mt-2 text-gray-600 dark:text-gray-400">
											{recipe.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</>
	)
}
