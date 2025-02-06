import "./charList.scss"
import useMarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"

const CharList = (props) => {
  // const [state, setState] = useState({
  //   charList: [],
  //   loading: true,
  //   error: false,
  //   newItemLoading: false,
  //   offset: 210,
  //   charEnded: false,
  // })

  // const { charList, loading, error, newItemLoading, offset, charEnded } = state

  const [charList, setCharList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [newItemLoading, setNewItemLoading] = useState(false)
  const [offset, setOffset] = useState(210)
  const [charEnded, setCharEnded] = useState(false)

  // const marvelService = new MarvelService()
  //  const { loading, error, getAllCharacters } = useMarvelService()
  const { getAllCharacters } = useMarvelService()

  useEffect(() => {
    onRequest()
  }, [])

  const onRequest = (offset) => {
    onCharListLoading()
    getAllCharacters(offset).then(onCharListLoaded).catch(onError)
  }

  // const onCharListLoading = () => {
  //   setState((prev) => ({ ...prev, newItemLoading: true }))
  // }

  const onCharListLoading = () => {
    setNewItemLoading(true)
  }

  const onCharListLoaded = (newCharList) => {
    let ended = false
    if (newCharList.length < 9) {
      ended = true
    }

    // setState(({ offset, charList }) => ({
    //   charList: [...charList, ...newCharList],
    //   loading: false,
    //   newItemLoading: false,
    //   offset: offset + 9,
    //   charEnded: ended,
    // }))

    setCharList((charList) => [...charList, ...newCharList])
    setLoading((loading) => false)
    setNewItemLoading((newItemLoading) => false)
    setOffset((offset) => offset + 9)
    setCharEnded((charEnded) => ended)
  }

  const onError = () => {
    // setState((prev) => ({
    //   ...prev,
    //   error: true,
    //   loading: false,
    //   newItemLoading: false,
    // }))
    setError(true)
    setLoading((loading) => false)
    setNewItemLoading(false)
  }

  // чтобы не помещать такую конструкцию в метод render
  const renderItems = (arr) => {
    const items = arr.map((item) => {
      let imgStyle = { objectFit: "cover" }
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" }
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          key={item.id}
          onClick={() => props.onCharSelected(item.id)}
          onKeyDown={(e) => {
            if (e.code === "Space" || e.key === "Enter") {
              e.preventDefault()
              props.onCharSelected(item.id)
            }
          }}>
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      )
    })
    // для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>
  }

  const items = renderItems(charList)

  const errorMessage = error ? <ErrorMessage /> : null
  const spinner = loading ? <Spinner /> : null
  const content = !(loading || error) ? items : null

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {content}
      <button
        className="button button__main button__long"
        disabled={newItemLoading}
        style={{ display: charEnded ? "none" : "block" }}
        onClick={() => onRequest(offset)}>
        <div className="inner">load more</div>
      </button>
    </div>
  )
}

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
}

export default CharList
