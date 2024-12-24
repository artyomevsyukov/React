import { useDispatch, useSelector } from "react-redux"
import { deleteBook } from "../../redux/books/actionCreators"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs"

import "./BookList.css"
function BookList() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <div>No books available</div>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-actions">
                {book.isFavorite ? (
                  <BsBookmarkStarFill className="star-icon" />
                ) : (
                  <BsBookmarkStar className="star-icon" />
                )}
                {/* <BsBookmarkStar />
                <BsBookmarkStarFill /> */}
                <button onClick={() => handleDeleteBook(book.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BookList
