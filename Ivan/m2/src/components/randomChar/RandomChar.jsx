import "./randomChar.scss"
import mjolnir from "../../resources/img/mjolnir.png"
import { Component } from "react"
import MarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"

class RandomChar extends Component {
  constructor(props) {
    super(props)
    this.updateChar() //Временно, вызывает несколько раз
  }

  state = {
    char: {},
    loading: true,
  }

  marvelService = new MarvelService()

  onCharLoaded = (char) => {
    // console.log("char: ", char)
    this.setState({ char: char, loading: false })
  }
  updateChar = () => {
    // 1011284  - 404
    // const id = 1011284
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
    this.marvelService.getCharacter(id).then(this.onCharLoaded)
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

  render() {
    const { char, loading } = this.state

    return (
      <div className="randomchar">
        {loading ? <Spinner /> : <this.View char={char} />}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    )
  }
}

export default RandomChar
