"use client"
import { useEffect, useRef } from "react"
import { Card, CardContent } from "../../ui/card"
import Image from "next/image"
import useFetchRecipes from "@/hooks/useFetchRecipes"
import { useRecipeContext } from "@/contexts/RecipeContext"
import Link from "next/link"
import type { Recipe } from "@/types/types"
import RecipeCardSkeleton from "@/components/common/Skeleton/RecipeCardSkeleton"
import gsap from "gsap"

interface ErrorMessageProps {
	message: string
}
interface RecipesSectionProps {
	recipes: Recipe[]
	loading: boolean
	error: string | null
}
function ErrorMessage({ message }: ErrorMessageProps) {
	return (
		<div className="col-span-2 text-center text-gray-500 dark:text-gray-400">
			{message}
		</div>
	)
}

function RecipesSection({ recipes, loading, error }: RecipesSectionProps) {
	const cardRefs = useRef<HTMLDivElement[]>([])

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const cards = cardRefs.current

		// Animação dos cartões
		gsap.fromTo(
			cards,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" },
		)
	}, [recipes])

	if (loading) {
		return (
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{[...Array(2)].map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<RecipeCardSkeleton key={index} />
				))}
			</div>
		)
	}
	if (error || recipes.length === 0) {
		return (
			<ErrorMessage
				message={
					error
						? "Ocorreu um erro ao carregar as receitas."
						: "Nenhuma receita disponível."
				}
			/>
		)
	}

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			{recipes.map((recipe, index) => (
				<div
					key={recipe.id}
					ref={(el) => {
						if (el) cardRefs.current[index] = el
					}}
					className="transition-transform duration-300 ease-in-out hover:scale-105"
				>
					<Link href={`/recipes/${recipe.id}`}>
						<Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
							<Image
								alt={recipe.name}
								className="h-40 w-full rounded-t-lg object-cover"
								height={200}
								src={recipe.imageUrl}
								style={{ aspectRatio: "300/200", objectFit: "cover" }}
								width={300}
							/>
							<CardContent className="space-y-2 p-4">
								<h3 className="text-lg font-semibold">{recipe.name}</h3>
								<p className="text-gray-500 dark:text-gray-400">
									{recipe.description}
								</p>
							</CardContent>
						</Card>
					</Link>
				</div>
			))}
		</div>
	)
}

export default function SectionRecipes() {
	const { recipes } = useRecipeContext()
	const limitedRecipes = recipes.slice(0, 4)
	const { error, loading } = useFetchRecipes()

	return (
		<main>
			<section className="py-12 md:py-16">
				<div className="container grid gap-8 px-4 md:grid-cols-2 md:gap-12 md:px-6">
					<div className="grid gap-4">
						<h2 className="text-2xl font-bold tracking-tight md:text-3xl">
							Receitas Populares
						</h2>
						<p className="text-gray-500 dark:text-gray-400">
							Explore nossa coleção de deliciosas receitas
						</p>
					</div>
					<RecipesSection
						recipes={limitedRecipes}
						loading={loading}
						error={error}
					/>
				</div>
			</section>
		</main>
	)
}
