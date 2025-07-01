import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook"

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
}

export const fetchHeroes = createAsyncThunk("heroes/fetchHeroes", async () => {
  const { request } = useHttp()
  return await request("http://localhost:3001/heroes")
})

const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    // heroesFetching: (state) => {
    //   state.heroesLoadingStatus = "loading"
    // },
    // heroesFetched: (state, action) => {
    //   state.heroes = action.payload
    //   state.heroesLoadingStatus = "idle"
    // },
    // heroesFetchingError: (state) => {
    //   state.heroesLoadingStatus = "error"
    // },
    addHero: (state, action) => {
      state.heroes.push(action.payload)
    },
    heroDelete: (state, action) => {
      state.heroes = state.heroes.filter((hero) => hero.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.heroesLoadingStatus = "loading"
    })
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.heroes = action.payload
      state.heroesLoadingStatus = "idle"
    })
    builder.addCase(fetchHeroes.rejected, (state) => {
      console.log("ERROR")
      state.heroesLoadingStatus = "error"
    })
  },
})

export const selectHeroes = (state) => state.heroes.heroes
export const selectHeroesLoadingStatus = (state) =>
  state.heroes.heroesLoadingStatus

export const {
  // heroesFetching,
  // heroesFetched,
  // heroesFetchingError,
  addHero,
  heroDelete,
} = heroesSlice.actions
export default heroesSlice.reducer
