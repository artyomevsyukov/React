import { configureStore } from "@reduxjs/toolkit"

import heroesSlice from "./slices/heroesSlice"
import filtersSlice from "./slices/filtersSlice"
// import errorReducer from "./slices/errorReducer"

const store = configureStore({
  reducer: {
    heroes: heroesSlice,
    filters: filtersSlice,
    // error: errorReducer,
  },
})

export default store
