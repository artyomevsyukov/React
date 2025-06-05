import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersFetching: (state) => {
      state.filtersLoadingStatus = "loading"
    },
    filtersFetched: (state, action) => {
      state.filters = action.payload
      state.filtersLoadingStatus = "idle"
    },
    filtersFetchingError: (state) => {
      state.filtersLoadingStatus = "error"
    },
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload.filterName
      state.filters = state.filters.map((filter) => ({
        ...filter,
        active: filter.id === action.payload.filterId,
      }))
    },
  },
})

export const selectFilters = (state) => state.filters.filters
export const selectFiltersLoadingStatus = (state) =>
  state.filters.filtersLoadingStatus

export const {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  setActiveFilter,
} = filtersSlice.actions
export default filtersSlice.reducer
