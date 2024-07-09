import RecipeCategoriesProvider from '@/contexts/RecipeCategory'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <RecipeCategoriesProvider>{children}</RecipeCategoriesProvider>
    </>
  )
}
