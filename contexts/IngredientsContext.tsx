"use client";
import React, {
	createContext,
	useState,
	useContext,
	type ReactNode,
} from "react";
import type { Ingredient, IngredientContextType } from "@/types/types";

const IngredientContext = createContext<IngredientContextType | undefined>(
	undefined,
);

export default function IngredientProvider({
	children,
}: { children: ReactNode }) {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	const addIngredient = (newIngredient: Ingredient) => {
		setIngredients([...ingredients, newIngredient]);
	};

	return (
		<IngredientContext.Provider
			value={{ ingredients, setIngredients, addIngredient }}
		>
			{children}
		</IngredientContext.Provider>
	);
}

export const useIngredientContext = (): IngredientContextType => {
	const context = useContext(IngredientContext);
	if (!context) {
		throw new Error(
			"useIngredientContext must be used within a IngredientProvider",
		);
	}
	return context;
};
