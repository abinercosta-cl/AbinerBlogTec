import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AbinerBlogTec — Código, Backend & Linux",
    template: "%s | AbinerBlogTec",
  },
  description: "Blog técnico pessoal focado em backend (Go, TypeScript, Python), Linux e arquitetura de sistemas por Abiner Costa.",
  keywords: ["backend", "go", "golang", "typescript", "linux", "next.js", "desenvolvimento", "abiner"],
  authors: [{ name: "Abiner Costa" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080C14] text-[#F8FAFC] font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}

