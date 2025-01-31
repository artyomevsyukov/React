import "./charList.scss"
// import abyss from "../../resources/img/abyss.jpg"
import MarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { Component } from "react"
import { v4 as uuidv4 } from "uuid"

class CharList extends Component {
  state = {
    char: [],
    loading: true,
    error: false,
  }

  marvelService = new MarvelService()

  componentDidMount() {
    this.updateChar()
    // this.timerId = setInterval(this.updateChar, 15000)
    // this.setState({ error: false })
  }

  onCharLoaded = (char) => {
    this.setState({ char: char, loading: false })
  }

  onError = () => {
    this.setState({ loading: false, error: true })
  }

  updateChar = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharLoaded)
      .catch(this.onError)
      .finally(this.setState({ error: false }))
  }

  loadMore = () => {
    console.log("test")
  }

  render() {
    const { char, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <this.View char={char} /> : null

    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}

        <button
          className="button button__main button__long"
          onClick={this.loadMore}>
          <div className="inner">load more</div>
        </button>
      </div>
    )
  }

  View = ({ char }) => {
    return (
      <ul className="char__grid">
        {char.map((item) => {
          const { name, thumbnail } = item

          return (
            <li className="char__item" key={uuidv4()}>
              <img
                src={thumbnail}
                alt={name}
                style={{
                  objectFit: item.isImageUnavailable ? "contain" : "cover",
                }}
              />
              <div className="char__name">{name}</div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default CharList
