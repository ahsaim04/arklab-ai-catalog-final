import type { Metadata } from "next"
import { Suspense } from "react"
import { redirect } from "next/navigation"
import { getServerAuthSession } from "@/lib/auth"
import { CatalogClient } from "./catalog-client"
import type { Agent } from "@/lib/types"
import { readFile } from "fs/promises"
import { join } from "path"

async function getAgents(): Promise<Agent[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    const filePath = join(process.cwd(), "public", "mock-agents.json")
    const fileContents = await readFile(filePath, "utf8")
    const agents: Agent[] = JSON.parse(fileContents)
    return agents
  } catch (error) {
    console.error("Error reading agents file:", error)
    return [
      {
        id: "agent-001",
        name: "Intelligent Chatbot Pro",
        description: "An advanced AI chatbot for enhanced customer support and query resolution.",
        status: "Active",
        category: "Customer Service",
        pricingModel: "Subscription",
      },
      {
        id: "agent-002",
        name: "Voice Assistant X",
        description: "Next-generation voice automation for internal operations and data retrieval.",
        status: "Beta",
        category: "Operations",
        pricingModel: "Per-Use",
      },
      {
        id: "agent-003",
        name: "Marketing Content Generator",
        description: "AI-powered tool to generate engaging marketing copy, ideas, and campaign outlines.",
        status: "Active",
        category: "Marketing",
        pricingModel: "Subscription",
      },
    ]
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const agents = await getAgents()
  const activeAgents = agents.filter((agent) => agent.status === "Active").length

  return {
    title: `AI Agent Dashboard | ${agents.length} AI Solutions Available`,
    description: `Manage ${agents.length} powerful AI agents including ${activeAgents} active solutions for customer service, marketing, development, and more.`,
    openGraph: {
      title: `AI Agent Dashboard | ${agents.length} AI Solutions`,
      description: `Manage ${agents.length} AI agents with ${activeAgents} active solutions`,
    },
  }
}

export default async function DashboardPage() {
  const session = await getServerAuthSession()

  if (!session) {
    redirect("/")
  }

  const agents = await getAgents()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Agent Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {session.user?.name}! Manage and discover powerful AI agents for your business needs.
          </p>
        </header>

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          }
        >
          <CatalogClient initialAgents={agents} />
        </Suspense>
      </div>
    </div>
  )
}
