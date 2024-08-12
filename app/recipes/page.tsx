"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import useFetchRecipes from "@/hooks/useFetchRecipes";
import { useRecipeContext } from "@/contexts/RecipeContext";
import FilterSelect from "@/components/common/FilterSelect";
import { useRecipeCategoriesContext } from "@/contexts/RecipeCategory";
import useFetchRecipesCategories from "@/hooks/useFetchRecipesCategories";
import type { Recipe } from "@/types/types";
import { useEffect, useState } from "react";
import InputFilter from "@/components/common/InputFilter";

export default function Page() {
	const { recipes } = useRecipeContext();
	useFetchRecipes();
	const { recipeCategories } = useRecipeCategoriesContext();
	useFetchRecipesCategories();
	const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	useEffect(() => {
		let filtered = recipes;

		if (selectedCategory && selectedCategory !== "todos") {
			filtered = filtered.filter((recipe) =>
				recipe.categories.some(
					(category) => category.name.toLowerCase() === selectedCategory,
				),
			);
		}

		if (searchTerm) {
			filtered = filtered.filter((recipe) =>
				recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		}
		setFilteredRecipes(recipes);
	}, [recipes, selectedCategory, searchTerm]);

	const handleFilterChange = () => {
		let filtered = recipes;

		if (selectedCategory && selectedCategory !== "todos") {
			filtered = filtered.filter((recipe) =>
				recipe.categories.some(
					(category) => category.name.toLowerCase() === selectedCategory,
				),
			);
		}

		if (searchTerm) {
			filtered = filtered.filter((recipe) =>
				recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
			);
		}

		setFilteredRecipes(filtered);
	};
	return (
		<>
			<div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
				<div className="mb-8 md:mb-10 lg:mb-12">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl">
						Gourmet Connect
					</h1>
					<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
						Discover a world of culinary excellence with our collection of
						gourmet recipes.
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
								placeholder="Search by name"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<Button size="sm" onClick={handleFilterChange}>
							<SearchIcon className="mr-2 h-4 w-4" />
							Search Recipes
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-1">
					{filteredRecipes.map((recipe: Recipe) => (
						<div key={recipe.id} className="grid grid-cols-1 p-5">
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
			</div>
		</>
	);
}
