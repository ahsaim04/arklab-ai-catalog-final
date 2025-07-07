"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { setSearchQuery } from "@/lib/store"

export function SearchBar() {
  const dispatch = useAppDispatch()
  const searchQuery = useAppSelector((state) => state.app.filters.searchQuery)

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search agents by name or description..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="pl-10 h-11"
      />
    </div>
  )
}
