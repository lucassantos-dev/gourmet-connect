import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import NavBar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import RecipeProvider from "@/contexts/RecipeContext"
import PageTransition from "@/components/PageTransition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Gourmet Connect",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={inter.className}>
				<main className="flex flex-col min-h-screen">
					<header>
						<NavBar />
					</header>
					<div className="flex-grow">
						<PageTransition>
							<RecipeProvider>{children}</RecipeProvider>
						</PageTransition>
					</div>
					<footer>
						<Footer />
					</footer>
				</main>
			</body>
		</html>
	)
}
