import { configureStore } from "@reduxjs/toolkit"
// import booksReducer from "./books/reducer"
import booksReducer from "./slices/booksSlice.js"
import filterSlice from "./slices/filterSlice.js" //filterSlice

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterSlice,
  },
})

export default store
