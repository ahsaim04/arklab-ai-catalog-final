"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAppSelector } from "@/lib/hooks"
import { Bot, Filter, Search } from "lucide-react"

export function StatsBar() {
  const { agents, filteredAgents, filters } = useAppSelector((state) => state.app)

  const hasActiveFilters =
    filters.searchQuery ||
    filters.selectedStatuses.length > 0 ||
    filters.selectedCategories.length > 0 ||
    filters.selectedPricingModel

  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <Card className="p-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <span className="font-semibold">
                {filteredAgents.length} of {agents.length} agents
              </span>
            </div>

            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filtered results</span>
              </div>
            )}

            {filters.searchQuery && (
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Badge variant="outline" className="text-xs">
                  "{filters.searchQuery}"
                </Badge>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{agents.filter((a) => a.status === "Active").length} Active</span>
            <span>•</span>
            <span>{agents.filter((a) => a.status === "Beta").length} Beta</span>
            <span>•</span>
            <span>{agents.filter((a) => a.status === "Archived").length} Archived</span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
