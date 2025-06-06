import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook"

const initialState = {
  filters: [],
  filtersLoadingStatus: "idle",
  activeFilter: "all",
}

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async () => {
    const { request } = useHttp()
    return await request("http://localhost:3001/filters")
  }
)

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload.filterName
      state.filters = state.filters.map((filter) => ({
        ...filter,
        active: filter.id === action.payload.filterId,
      }))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilters.pending, (state) => {
      state.filtersLoadingStatus = "loading"
    })
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.filters = action.payload
      state.filtersLoadingStatus = "idle"
    })
    builder.addCase(fetchFilters.rejected, (state) => {
      console.log("ERROR")
      state.filtersLoadingStatus = "error"
    })
  },
})

export const selectFilters = (state) => state.filters.filters
export const selectActiveFilter = (state) => state.filters.activeFilter
export const selectFiltersLoadingStatus = (state) =>
  state.filters.filtersLoadingStatus

export const {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  setActiveFilter,
} = filtersSlice.actions
export default filtersSlice.reducer
