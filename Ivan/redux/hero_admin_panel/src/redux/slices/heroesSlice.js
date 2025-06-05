import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
}

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    heroesFetching: (state) => {
      state.heroesLoadingStatus = "loading"
    },
    heroesFetched: (state, action) => {
      state.heroes = action.payload
      state.heroesLoadingStatus = "idle"
    },
    heroesFetchingError: (state) => {
      state.heroesLoadingStatus = "error"
    },
    addHero: (state, action) => {
      state.heroes.push(action.payload)
    },
    heroDelete: (state, action) => {
      state.heroes = state.heroes.filter((hero) => hero.id !== action.payload)
    },
  },
})

export const selectHeroes = (state) => state.heroes.heroes
export const selectHeroesLoadingStatus = (state) =>
  state.heroes.heroesLoadingStatus

export const {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
  addHero,
  heroDelete,
} = heroesSlice.actions
export default heroesSlice.reducer
