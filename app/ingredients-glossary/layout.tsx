import IngredientCategoriesProvider from "@/contexts/IngredientCategoryContext";
import IngredientProvider from "@/contexts/IngredientsContext";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<IngredientCategoriesProvider>
				<IngredientProvider>{children}</IngredientProvider>
			</IngredientCategoriesProvider>
		</>
	);
}
