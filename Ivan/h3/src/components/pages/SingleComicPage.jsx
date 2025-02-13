import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import useMarvelService from "../../services/MarverService"
import Spinner from "../spinner/Spinner"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { Helmet } from "react-helmet"

import "./singleComicPage.scss"

const SingleComicPage = () => {
  const { comicId } = useParams()
  const [comic, setComic] = useState(null)

  const { loading, error, getComic, clearError } = useMarvelService()

  useEffect(() => {
    updateComic()
  }, [comicId])

  const updateComic = () => {
    if (!comicId) {
      return
    }
    clearError()
    getComic(comicId).then(onComicLoaded)
  }

  const onComicLoaded = (comic) => {
    setComic(comic)
  }

  const errorMessage = error ? <ErrorMessage /> : null
  const spinner = loading ? <Spinner /> : null
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null

  return (
    <div className="single-comic">
      {errorMessage}
      {spinner}
      {content}
    </div>
  )
}

const View = ({ comic }) => {
  console.log("comic: ", comic)
  const { description, thumbnail, title, pageCount, language, price } = comic

  return (
    <>
      <Helmet>
        <meta name="description" content={`${title} comics book`}></meta>
        <title>{title}</title>
      </Helmet>
      <div className="single-comic">
        <img src={thumbnail} alt={title} className="single-comic__img" />
        <div className="single-comic__info">
          <h2 className="single-comic__name">{title}</h2>
          <p className="single-comic__descr">{description}</p>
          <p className="single-comic__descr">{pageCount}</p>
          <p className="single-comic__descr">Language: {language}</p>
          <div className="single-comic__price">{price}</div>
        </div>
        <Link to={"/comics"} className="single-comic__back">
          Back to all
        </Link>
      </div>
    </>
  )
}

export default SingleComicPage
