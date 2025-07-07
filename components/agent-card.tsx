"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, Zap, Archive, Clock } from "lucide-react"
import type { Agent } from "@/lib/types"

interface AgentCardProps {
  agent: Agent
  index: number
}

const statusIcons = {
  Active: Zap,
  Beta: Clock,
  Archived: Archive,
}

const statusColors = {
  Active: "bg-green-100 text-green-800 border-green-200",
  Beta: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Archived: "bg-gray-100 text-gray-800 border-gray-200",
}

const pricingColors = {
  "Free Tier": "bg-blue-100 text-blue-800 border-blue-200",
  Subscription: "bg-purple-100 text-purple-800 border-purple-200",
  "Per-Use": "bg-orange-100 text-orange-800 border-orange-200",
}

export function AgentCard({ agent, index }: AgentCardProps) {
  const StatusIcon = statusIcons[agent.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-200 border-2 hover:border-primary/20">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-lg leading-tight line-clamp-2">{agent.name}</CardTitle>
              </div>
            </div>
            <Badge variant="outline" className={`shrink-0 ${statusColors[agent.status]}`}>
              <StatusIcon className="h-3 w-3 mr-1" />
              {agent.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-sm leading-relaxed line-clamp-3">{agent.description}</CardDescription>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">Category:</span>
              <Badge variant="secondary" className="text-xs">
                {agent.category}
              </Badge>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground font-medium">Pricing:</span>
              <Badge variant="outline" className={`text-xs ${pricingColors[agent.pricingModel]}`}>
                {agent.pricingModel}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
