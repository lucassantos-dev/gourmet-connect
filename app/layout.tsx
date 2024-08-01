import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import RecipeProvider from '@/contexts/RecipeContext'
// import RecipeCategoriesProvider from '@/contexts/RecipeCategory'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gourmet Connect',
  description: '',
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
        <div className='flex-grow'>
          <RecipeProvider>{children}</RecipeProvider>
        </div>
        <footer>
          <Footer />
        </footer>
        </main>
      </body>
    </html>
  )
}
