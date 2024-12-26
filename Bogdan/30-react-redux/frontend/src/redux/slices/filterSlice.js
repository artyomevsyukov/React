import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      //   return { ...state, title: action.payload }
      // state = {
      //   title: action.payload
      // }
      // return state
      state.title = action.payload
      //так можно благодоря библиотеке immer
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    resetFilters: (state) => {
      return initialState
    },

    setFavoriteFilter: (state, action) => {
      return { ...state, onlyFavorite: action.payload }
    },
  },
})

export const {
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  setFavoriteFilter,
} = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title
export const selectAuthorFilter = (state) => state.filter.author
export const selectFavoriteFilter = (state) => state.filter.onlyFavorite

export default filterSlice.reducer
