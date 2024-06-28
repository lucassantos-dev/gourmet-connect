import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import RecipeProvider from "@/contexts/RecipeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourmet Connect",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
      <RecipeProvider>
          {children}
      </RecipeProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
