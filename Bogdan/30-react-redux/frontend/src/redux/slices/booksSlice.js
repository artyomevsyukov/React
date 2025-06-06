import axios from "axios"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import createBookWithId from "../../utils/createBookWithId"
import { setError } from "./errorSlice"

const initialState = {
  books: [],
  isLoadingViaAPI: false,
}

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(setError(error.message))
      return thunkAPI.rejectWithValue(error.message)
      // throw error
    }
  }
)

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
      //   const index = state.findIndex((book) => book.id === action.payload)
      //   if (index !== -1) {
      //     state.splice(index, 1)
      //   }
    },
    toggleFavorite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
      //   return state.map((book) =>
      //     book.id === action.payload
      //       ? { ...book, isFavorite: !book.isFavorite }
      //       : book
      //   )
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true
    })
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false

      if (action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, "API"))
      }
    })
    builder.addCase(fetchBook.rejected, (state) => {
      console.log("ERROR")
      state.isLoadingViaAPI = false
    })
  },
})

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions
export const selectBooks = (state) => state.books.books
export const selectIsLoadingViaAPI = (state) => state.books.isLoadingViaAPI

export default booksSlice.reducer
