import { configureStore } from "@reduxjs/toolkit"
// import booksReducer from "./books/reducer"
import booksReducer from "./slices/booksSlice.js"
import filterSlice from "./slices/filterSlice.js" //filterSlice
import errorReducer from "./slices/errorSlice.js"

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterSlice,
    error: errorReducer,
  },
})

export default store
