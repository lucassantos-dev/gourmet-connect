import { Skeleton } from "@/components/ui/skeleton"

export default function CardSkeleton() {
	return (
		<div className="grid grid-cols-1 p-5">
			<div className="group relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 ease-in-out">
				<Skeleton
					className="h-64 w-full object-cover"
					style={{ aspectRatio: "600/400" }}
				/>
				<div className="bg-white p-4 dark:bg-gray-950">
					<Skeleton className="h-6 w-3/4" />
					<Skeleton className="mt-2 h-4 w-full" />
				</div>
			</div>
		</div>
	)
}
