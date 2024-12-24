import "./BookForm.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addBook } from "../../redux/books/actionCreators"

function BookForm() {
  // const [formData, setFormData] = useState({})
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    if (title && author) {
      // dispatch action
      const book = { title, author }
      console.log(addBook(book))

      dispatch(addBook(book))
      setAuthor("")
      setTitle("")
    }
  }

  // function handleChange(e) {}

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
      </form>
    </div>
  )
}

export default BookForm
