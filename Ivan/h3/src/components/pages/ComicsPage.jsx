import { useState, useEffect } from "react"
import useMarvelService from "../../services/MarverService"

import AppBanner from "../appBanner/AppBanner"
import ComicsList from "../comicsList/ComicsList"
import Spinner from "../spinner/Spinner"

const ComicsPage = () => {
  const [selectedComics, setComics] = useState(null)
  const [comicsList, setComicsList] = useState(null)

  const { getAllComics } = useMarvelService()

  useEffect(() => {
    getAllComics().then(setComicsList)
  }, [])

  const onComicsSelected = (id) => {
    setComics(id)
  }

  return (
    <>
      <AppBanner />
      {/* {comicsList ? <ComicsList comics={comicsList} /> : <Spinner />} */}
      <ComicsList onComicsSelected={onComicsSelected} />
    </>
  )
}

export default ComicsPage
