"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { SearchBar } from "@/components/search-bar"
import { Filters } from "@/components/filters"
import { AgentGrid } from "@/components/agent-grid"
import { StatsBar } from "@/components/stats-bar"
import { useAppDispatch } from "@/lib/hooks"
import { setAgents, setLoading } from "@/lib/store"
import type { Agent } from "@/lib/types"

interface CatalogClientProps {
  initialAgents: Agent[]
}

export function CatalogClient({ initialAgents }: CatalogClientProps) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(setAgents(initialAgents))
    dispatch(setLoading(false))
  }, [dispatch, initialAgents])

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-4"
      >
        <SearchBar />
        <StatsBar />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="sticky top-24">
            <Filters />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <AgentGrid />
        </motion.div>
      </div>
    </div>
  )
}
