import "./BookForm.css"
// import axios from "axios"

import { useState } from "react"
import { useDispatch } from "react-redux"
import { FaSpinner } from "react-icons/fa"
// import { addBook } from "../../redux/books/actionCreators"
import {
  addBook,
  // thunkFunction,
  fetchBook,
} from "../../redux/slices/booksSlice"
import booksData from "../../data/books.json"
import createBookWithId from "../../utils/createBookWithId"
import { setError } from "../../redux/slices/errorSlice"

function BookForm() {
  // const [formData, setFormData] = useState({})
  // const API = "http://localhost:4000/random-book"
  const API_DELAY = "http://localhost:4000/random-book-delay"
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author }, "manual")))
      setAuthor("")
      setTitle("")
    } else {
      dispatch(setError("Введите название и автора"))
      // setTimeout(() => dispatch(clearError()), 100)
    }
  }

  function handleAddRandomBook() {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithId(randomBook, "random")))
  }

  // async function handleAddRandomBookVaiApi() {
  //   try {
  //     const res = await fetch(API)
  //     const data = await res.json()
  //     if (data && data.title && data.author) {
  //       dispatch(addBook(createBookWithId(data)))
  //     }
  //   } catch (error) {
  //     console.error("Error fetching random book", error)
  //   }
  // }

  async function handleAddRandomBookVaiApi() {
    // dispatch(fetchBook(API))
    try {
      setIsLoading(true)
      await dispatch(fetchBook(API_DELAY))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Название"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            placeholder="Автор"
            type="text"
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Random Book
        </button>
        <button
          type="button"
          onClick={handleAddRandomBookVaiApi}
          disabled={isLoading}>
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            "Add Random Book via API"
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
