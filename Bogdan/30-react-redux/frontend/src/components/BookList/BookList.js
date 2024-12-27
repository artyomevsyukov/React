import { useDispatch, useSelector } from "react-redux"
// import { deleteBook, toggleFavorite } from "../../redux/books/actionCreators"
import {
  deleteBook,
  toggleFavorite,
  selectBooks,
} from "../../redux/slices/booksSlice"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs"
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from "../../redux/slices/filterSlice"
import "./BookList.css"

function BookList() {
  // const books = useSelector((state) => state.books)
  const books = useSelector(selectBooks)
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const isFavoriteFilter = useSelector(selectFavoriteFilter)

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const matchesIsFavorite = isFavoriteFilter ? book.isFavorite : book

    // console.log({ title: book.title, matchesTitle })
    return matchesTitle && matchesAuthor && matchesIsFavorite
  })
  // console.log(filteredBooks)

  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id))
  }

  function highlightMatch(text, filter) {
    if (!filter) return text

    const regex = new RegExp(`(${filter})`, "gi")

    return text.split(regex).map((part, i) => {
      if (filter.toLowerCase() === part.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {part}
          </span>
        )
      }
      return part
    })
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {filteredBooks.length === 0 ? (
        <div>No books available</div>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {highlightMatch(book.title, titleFilter)} by{" "}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>
                <span> ({book.source})</span>
              </div>
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
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
