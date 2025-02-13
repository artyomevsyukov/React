import { useState } from "react"
import { Helmet } from "react-helmet"

import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import RandomChar from "../randomChar/RandomChar"
import decoration from "../../resources/img/vision.png"

import ErrorBoundary from "../errorBoundary/ErrorBoundary"

const MainPage = () => {
  const [selectedChar, setChar] = useState(null)

  const onCharSelected = (id) => {
    setChar(id)
  }

  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal"></meta>
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <RandomChar />
      </ErrorBoundary>
      <div className="char__content">
        <ErrorBoundary>
          <CharList onCharSelected={onCharSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <CharInfo charId={selectedChar} />
        </ErrorBoundary>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage
