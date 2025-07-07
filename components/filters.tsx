"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Filter } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setSelectedStatuses, setSelectedCategories, setSelectedPricingModel, clearAllFilters } from "@/lib/store"

const statuses = ["Active", "Beta", "Archived"]
const pricingModels = ["Free Tier", "Subscription", "Per-Use"]

export function Filters() {
  const dispatch = useAppDispatch()
  const { agents, filters } = useAppSelector((state) => state.app)

  const categories = Array.from(new Set(agents.map((agent) => agent.category))).sort()

  const handleStatusChange = (status: string, checked: boolean) => {
    const newStatuses = checked
      ? [...filters.selectedStatuses, status]
      : filters.selectedStatuses.filter((s) => s !== status)
    dispatch(setSelectedStatuses(newStatuses))
  }

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.selectedCategories, category]
      : filters.selectedCategories.filter((c) => c !== category)
    dispatch(setSelectedCategories(newCategories))
  }

  const handlePricingModelChange = (value: string) => {
    dispatch(setSelectedPricingModel(value))
  }

  const hasActiveFilters =
    filters.searchQuery ||
    filters.selectedStatuses.length > 0 ||
    filters.selectedCategories.length > 0 ||
    filters.selectedPricingModel

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => dispatch(clearAllFilters())}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label className="text-sm font-semibold">Status</Label>
            <div className="space-y-2">
              {statuses.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={`status-${status}`}
                    checked={filters.selectedStatuses.includes(status)}
                    onCheckedChange={(checked) => handleStatusChange(status, checked as boolean)}
                  />
                  <Label htmlFor={`status-${status}`} className="text-sm font-normal cursor-pointer">
                    {status}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold">Category</Label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-semibold">Pricing Model</Label>
            <RadioGroup value={filters.selectedPricingModel} onValueChange={handlePricingModelChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="pricing-all" />
                <Label htmlFor="pricing-all" className="text-sm font-normal cursor-pointer">
                  All Models
                </Label>
              </div>
              {pricingModels.map((model) => (
                <div key={model} className="flex items-center space-x-2">
                  <RadioGroupItem value={model} id={`pricing-${model}`} />
                  <Label htmlFor={`pricing-${model}`} className="text-sm font-normal cursor-pointer">
                    {model}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {hasActiveFilters && (
            <div className="pt-4 border-t">
              <Label className="text-sm font-semibold mb-2 block">Active Filters</Label>
              <div className="flex flex-wrap gap-1">
                {filters.selectedStatuses.map((status) => (
                  <Badge key={status} variant="secondary" className="text-xs">
                    {status}
                  </Badge>
                ))}
                {filters.selectedCategories.map((category) => (
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
                {filters.selectedPricingModel && (
                  <Badge variant="secondary" className="text-xs">
                    {filters.selectedPricingModel}
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
