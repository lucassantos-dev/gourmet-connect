import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function RecipeCardSkeleton() {
	return (
		<div>
			<Card className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
				<Skeleton
					className="h-40 w-full rounded-t-lg"
					style={{ aspectRatio: "300/200" }}
				/>
				<CardContent className="space-y-2 p-4">
					<Skeleton className="h-6 w-3/4" />
					<Skeleton className="h-4 w-full" />
				</CardContent>
			</Card>
		</div>
	)
}
