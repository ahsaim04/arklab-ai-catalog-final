"use client"

import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Agent, FilterState } from "./types"

interface AppState {
  agents: Agent[]
  filteredAgents: Agent[]
  filters: FilterState
  loading: boolean
}

const initialState: AppState = {
  agents: [],
  filteredAgents: [],
  filters: {
    searchQuery: "",
    selectedStatuses: [],
    selectedCategories: [],
    selectedPricingModel: "",
  },
  loading: false,
}

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.agents = action.payload
      state.filteredAgents = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.filters.searchQuery = action.payload
      state.filteredAgents = filterAgents(state.agents, state.filters)
    },
    setSelectedStatuses: (state, action: PayloadAction<string[]>) => {
      state.filters.selectedStatuses = action.payload
      state.filteredAgents = filterAgents(state.agents, state.filters)
    },
    setSelectedCategories: (state, action: PayloadAction<string[]>) => {
      state.filters.selectedCategories = action.payload
      state.filteredAgents = filterAgents(state.agents, state.filters)
    },
    setSelectedPricingModel: (state, action: PayloadAction<string>) => {
      state.filters.selectedPricingModel = action.payload
      state.filteredAgents = filterAgents(state.agents, state.filters)
    },
    clearAllFilters: (state) => {
      state.filters = {
        searchQuery: "",
        selectedStatuses: [],
        selectedCategories: [],
        selectedPricingModel: "",
      }
      state.filteredAgents = state.agents
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

function filterAgents(agents: Agent[], filters: FilterState): Agent[] {
  return agents.filter((agent) => {
    const matchesSearch =
      filters.searchQuery === "" ||
      agent.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(filters.searchQuery.toLowerCase())

    const matchesStatus = filters.selectedStatuses.length === 0 || filters.selectedStatuses.includes(agent.status)

    const matchesCategory =
      filters.selectedCategories.length === 0 || filters.selectedCategories.includes(agent.category)

    const matchesPricing = filters.selectedPricingModel === "" || filters.selectedPricingModel === agent.pricingModel

    return matchesSearch && matchesStatus && matchesCategory && matchesPricing
  })
}

export const {
  setAgents,
  setSearchQuery,
  setSelectedStatuses,
  setSelectedCategories,
  setSelectedPricingModel,
  clearAllFilters,
  setLoading,
} = appSlice.actions

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
