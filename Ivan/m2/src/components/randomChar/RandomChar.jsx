import "./randomChar.scss"
import mjolnir from "../../resources/img/mjolnir.png"
import { Component } from "react"
import MarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  }

  marvelService = new MarvelService()

  componentDidMount() {
    this.updateChar()
    // this.timerId = setInterval(this.updateChar, 15000)
    // this.setState({ error: false })
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
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

  updateChar = () => {
    // 1011284  - 404
    // const id = 1011284
    this.onCharLoading()
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError)
      .finally(this.setState({ error: false }))
  }

  render() {
    const { char, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <this.View char={char} /> : null

    return (
      <div className="randomchar">
        {errorMessage}
        {spinner}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main" onClick={this.updateChar}>
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    )
  }

  View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char
    const checkDescription = description
      ? description
      : "Для этого персонажа описания нет"

    return (
      <div className="randomchar__block">
        <img
          src={thumbnail}
          alt="Random character"
          className="randomchar__img"
          // className={`randomchar__img ${
          //   char.isImageUnavailable ? "randomchar__img--fill" : ""
          // }`}
          style={{
            objectFit: char.isImageUnavailable ? "contain" : "cover",
          }}
        />
        <div className="randomchar__info">
          <p className="randomchar__name">{name}</p>
          <p className="randomchar__descr">{checkDescription}</p>
          <div className="randomchar__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomChar
