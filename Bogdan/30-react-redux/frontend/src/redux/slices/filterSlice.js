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
    resetFilters: (state) => {
      return initialState
    },
  },
})

// console.log("filterSlice.actions: ", filterSlice.actions)
// console.log(filterSlice.actions.setTitleFilter("test"))

export const { setTitleFilter, resetFilters } = filterSlice.actions
export const selectTitleFilter = (state) => state.filter.title

export default filterSlice.reducer
