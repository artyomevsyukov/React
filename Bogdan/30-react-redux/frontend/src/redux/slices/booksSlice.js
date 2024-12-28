import axios from "axios"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import createBookWithId from "../../utils/createBookWithId"
import { setError } from "./errorSlice"

const initialState = []
// const API = "http://localhost:4000/random-book"

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
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload)
      //   const index = state.findIndex((book) => book.id === action.payload)
      //   if (index !== -1) {
      //     state.splice(index, 1)
      //   }
    },
    toggleFavorite: (state, action) => {
      state.forEach((book) => {
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
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      // console.log("CALLED")
      // console.log(action)

      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, "API"))
      }
    })
    // builder.addCase(fetchBook.rejected, (state, action) => {
    //   console.log("ERROR")
    //   // setError() Reduсer перестанет быть чистым
    // })
  },
})

// export async function thunkFunction(dispatch, getState) {
//   // console.log(getState())

//   try {
//     const res = await axios.get(API)
//     // if (res.data && res.data.title && res.data.author) {
//     if (res?.data?.title && res?.data?.author) {
//       dispatch(addBook(createBookWithId(res.data, "API")))
//     }
//   } catch (error) {
//     console.error("Error fetching random book", error)
//   }

//   // console.log(getState())
// }

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions
export const selectBooks = (state) => state.books

export default booksSlice.reducer
