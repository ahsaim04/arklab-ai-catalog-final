import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/navbar"
import { SessionSyncer } from "@/components/session-syncer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ArkLab AI Agent Catalog | Discover Powerful AI Solutions",
  description:
    "Explore our comprehensive catalog of AI agents for customer service, marketing, development, and more. Find the perfect AI solution for your business needs.",
  keywords:
    "AI agents, artificial intelligence, chatbots, automation, customer service, marketing AI, development tools",
  authors: [{ name: "ArkLab" }],
  openGraph: {
    title: "ArkLab AI Agent Catalog",
    description: "Discover powerful AI agents for your business needs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArkLab AI Agent Catalog",
    description: "Discover powerful AI agents for your business needs",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <SessionSyncer />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
