import "./comicsList.scss"
import { useState, useEffect } from "react"
import useMarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"
import PropTypes from "prop-types"
import { v4 as uuidv4 } from "uuid"

const ComicsList = (props) => {
  const [comicsList, setComicsList] = useState([])
  const [newItemLoading, setNewItemLoading] = useState(false)
  const [offset, setOffset] = useState(110)
  const [comicsEnded, setComicsEnded] = useState(false)

  const { loading, error, getAllComics } = useMarvelService()

  useEffect(() => {
    onRequest(offset, true)
  }, [])

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true)

    getAllComics(offset).then(onComicsListLoaded)
  }

  const onComicsListLoaded = (newComicsList) => {
    let ended = false
    if (newComicsList.length < 9) {
      ended = true
    }

    setComicsList((comicsList) => [...comicsList, ...newComicsList])
    setNewItemLoading(false)
    setOffset(offset + 12)
    setComicsEnded(ended)
  }

  const renderItems = (arr) => {
    const items = arr.map((item) => {
      return (
        <li
          className="comics__item"
          tabIndex={0}
          key={uuidv4()}
          onClick={() => props.onComicsSelected(item.id)}
          onKeyDown={(e) => {
            if (e.code === "Space" || e.key === "Enter") {
              e.preventDefault()
              props.onComicsSelected(item.id)
            }
          }}>
          {/* <a href={item.url}> */}
          <a href="#">
            <img
              src={item.thumbnail}
              alt="ultimate war"
              className="comics__item-img"
            />
            <div className="comics__item-name">{item.title}</div>
            <div className="comics__item-price">{item.price}</div>
          </a>
        </li>
      )
    })
    // для центровки спиннера/ошибки
    return <ul className="comics__grid">{items}</ul>
  }

  const items = renderItems(comicsList)

  const errorMessage = error ? <ErrorMessage /> : null
  const spinner = loading && !newItemLoading ? <Spinner /> : null
  console.log("render ComicsList - 2")
  return (
    <div className="comics__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}>
        <div className="inner">load more</div>
      </button>
    </div>
  )
}

ComicsList.propTypes = {
  onComicsSelected: PropTypes.func,
}

export default ComicsList
