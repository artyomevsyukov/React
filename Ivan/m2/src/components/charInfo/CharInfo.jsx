import "./charInfo.scss"
import { Component } from "react"
import MarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"
import Skeleton from "../skeleton/Skeleton"
import PropTypes from "prop-types"

class CharInfo extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    char: null,
    loading: false,
    error: false,
  }
  marvelService = new MarvelService()

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId != prevProps.charId) {
      this.updateChar()
    }
  }

  updateChar = () => {
    const { charId } = this.props
    if (!charId) {
      return
    }

    this.onCharLoading()

    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }

  onCharLoaded = (char) => {
    this.setState({ char: char, loading: false })
  }

  onCharLoading = () => {
    this.setState({ loading: true })
  }

  onError = () => {
    this.setState({ loading: false, error: true })
  }
  render() {
    const { char, loading, error } = this.state
    const skeleton = char || loading || error ? null : <Skeleton />
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !char) ? <View char={char} /> : null

    return (
      <div className="char__info">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    )
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char
  let imgStyle = { objectFit: "cover" }
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "unset" }
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">
        {description ? description : "Для этого персонажа нет описания"}
      </div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? (
          comics.slice(0, 10).map((item) => {
            return (
              <li className="char__comics-item" key={item.resourceURI}>
                {item.name}
              </li>
            )
          })
        ) : (
          <p> С этим персонажем комиксов нет</p>
        )}
      </ul>
    </>
  )
}

CharInfo.propTypes = {
  charId: PropTypes.number,
}

export default CharInfo
