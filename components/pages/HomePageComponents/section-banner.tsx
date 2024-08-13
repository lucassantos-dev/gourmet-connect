"use client"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"

export default function Banner() {
	const bannerRef = useRef(null)
	const textRef = useRef(null)
	const buttonRefs = useRef([])

	useEffect(() => {
		const banner = bannerRef.current
		const text = textRef.current
		const buttons = buttonRefs.current

		// Animação da imagem
		gsap.fromTo(
			banner,
			{ opacity: 0 },
			{ opacity: 1, duration: 1, ease: "power2.out" },
		)

		// Animação do texto
		gsap.fromTo(
			text,
			{ y: 50, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 },
		)

		// Animação dos botões
		buttons.forEach((button, index) => {
			gsap.fromTo(
				button,
				{ y: 30, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power2.out",
					delay: 1 + index * 0.2,
				},
			)
		})
	}, [])

	return (
		<section
			className="relative h-[80vh] w-full overflow-hidden"
			ref={bannerRef}
		>
			<Image
				src={process.env.NEXT_PUBLIC_BANNER_URL || "/"}
				alt="Banner"
				layout="fill"
				objectFit="cover"
				quality={100}
			/>
			<div
				className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b 
          from-transparent to-gray-900/50 px-4 text-center text-white md:px-6"
				ref={textRef}
			>
				<h1 className="text-3xl font-bold tracking-tight md:text-5xl">
					Bem-vindo ao Gourmet Connect
				</h1>
				<p className="max-w-md text-lg">
					Descubra um mundo de excelência culinária com nossa vasta coleção de
					receitas e ingredientes
				</p>
				<div className="flex gap-2">
					<Link href="/recipes">
						<Button className="bg-green-500 hover:bg-green-600 transition-transform transform hover:scale-105">
							Ver Receitas
						</Button>
					</Link>
					<Link href="/ingredients-glossary">
						<Button
							className="border-white text-black hover:bg-slate-200 hover:text-gray-900 transition-transform transform hover:scale-105"
							variant="outline"
						>
							Ver Ingredientes
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}
