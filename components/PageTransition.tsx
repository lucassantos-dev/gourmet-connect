"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function PageTransition({
	children,
}: { children: React.ReactNode }) {
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		// Animação de entrada
		gsap.fromTo(
			containerRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 0.5 },
		)
	}, [])

	return <div ref={containerRef}>{children}</div>
}
