import "./charList.scss"
import MarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { Component } from "react"
import PropTypes from "prop-types"

class CharList extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false,
  }

  marvelService = new MarvelService()

  componentDidMount() {
    this.onRequest()
  }

  onRequest = (offset) => {
    this.onCharListLoading()
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError)
  }

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    })
  }

  onCharListLoaded = (newCharList) => {
    let ended = false
    if (newCharList.length < 9) {
      ended = true
    }

    this.setState(({ offset, charList }) => ({
      charList: [...charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }))
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  // чтобы не помещать такую конструкцию в метод render
  renderItems(arr) {
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
          onClick={() => this.props.onCharSelected(item.id)}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault()
              this.props.onCharSelected(item.id)
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

  render() {
    const { charList, loading, error, newItemLoading, offset, charEnded } =
      this.state

    const items = this.renderItems(charList)

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
          onClick={() => this.onRequest(offset)}>
          <div className="inner">load more</div>
        </button>
      </div>
    )
  }
}

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
}

export default CharList
