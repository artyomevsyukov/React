import "./BookForm.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
// import { addBook } from "../../redux/books/actionCreators"
import { addBook } from "../../redux/slices/booksSlice"
import booksData from "../../data/books.json"
import createBookWithId from "../../utils/createBookWithId"

function BookForm() {
  // const [formData, setFormData] = useState({})
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    if (title && author) {
      dispatch(addBook(createBookWithId({ title, author })))
      setAuthor("")
      setTitle("")
    }
  }

  function handleAddRandomBook() {
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]
    dispatch(addBook(createBookWithId(randomBook)))
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
      </form>
    </div>
  )
}

export default BookForm
