"use client"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { GetIngredientsById } from "@/hooks/getIngredientById"

import Link from "next/link"
import type { Ingredient } from "@/types/types"
import { ArrowLeftIcon } from "lucide-react"

export default function IngredientPage({ params }: { params: { id: string } }) {
	const router = useRouter()
	const ingredient: Ingredient | undefined = GetIngredientsById(
		params.id as string,
	)
	if (!ingredient) {
		return <div>Carregando...</div>
	}
	return (
		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<button
				type="button"
				onClick={() => router.back()}
				className="flex  pb-10 items-center justify-center w-16 h-16 text-black hover:cursor-pointer focus:outline-none  transition-transform transform hover:scale-110 active:scale-95"
			>
				<ArrowLeftIcon className="w-8 h-8" />
			</button>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<img
						src={ingredient.imageUrl}
						alt="Ingredient"
						width={500}
						height={500}
						className="rounded-lg w-full h-auto object-cover"
					/>
				</div>
				<div className="grid gap-6">
					<div>
						<h1 className="text-3xl font-bold">{ingredient.name}</h1>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Description</h2>
						<p className="text-muted-foreground">{ingredient.description}</p>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Details</h2>
						<div className="grid grid-cols-2 gap-4">
							<div>
								<p className="text-muted-foreground">Unit:</p>
								<p>{ingredient.unit}</p>
							</div>
							<div>
								<p className="text-muted-foreground">Origin:</p>
								<p>{ingredient.origin.name}</p>
							</div>
						</div>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Categories</h2>
						<div className="flex flex-wrap gap-2">
							{ingredient.categories.map((category) => (
								<Badge key={category.id} variant="outline">
									{category.name}
								</Badge>
							))}
						</div>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Substitutes</h2>
						<div className="flex flex-wrap gap-2">
							{ingredient.substitutes.map((substitute) => (
								<Badge key={substitute.id} variant="outline">
									{substitute.name}
								</Badge>
							))}
						</div>
					</div>
					<div>
						{/* <h2 className="text-xl font-semibold">Recipes</h2>
						<ul className="space-y-2">
							{ingredient.recipes.map((recipe) => (
								<Link
									key={recipe.id}
									href={`/recipes/${recipe.id}`}
									className="text-primary hover:underline"
									prefetch={false}
								>
									{recipe.name}
								</Link>
							))}
						</ul> */}
					</div>
				</div>
			</div>
		</div>
	)
}
