"use client"

import { motion } from "framer-motion"
import { AgentCard } from "./agent-card"
import { useAppSelector } from "@/lib/hooks"
import { SearchX } from "lucide-react"

export function AgentGrid() {
  const { filteredAgents, loading } = useAppSelector((state) => state.app)

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
        ))}
      </div>
    )
  }

  if (filteredAgents.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <SearchX className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">No agents found</h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your search query or filters to find the AI agents you're looking for.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredAgents.map((agent, index) => (
        <AgentCard key={agent.id} agent={agent} index={index} />
      ))}
    </div>
  )
}
