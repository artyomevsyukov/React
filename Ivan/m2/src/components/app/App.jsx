import { useCallback, useMemo } from "react"
import AppHeader from "../appHeader/AppHeader"
import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import decoration from "../../resources/img/vision.png"
import MarvelService2 from "../../services/MarverService-2"

const App = () => {
  // console.log("🔥 Компонент App начинает рендер")

  const marvelService = useMemo(() => new MarvelService2(), [])

  // console.log("✅ marvelService создан:", marvelService)

  // Универсальный обработчик кликов
  const fetchData = useCallback(
    (method, id = "") => {
      // console.log("📌 Вызван fetchData с методом:", method)

      // if (typeof marvelService[method] !== "function") {
      //   console.error(`❌ Метод ${method} не существует в MarvelService2`)
      //   return
      // }

      marvelService[method](id)
        .then((res) => console.log("✅ Данные получены:", res.data.results))
        .catch((err) => console.error("❌ Ошибка запроса:", err))
    },
    [marvelService]
  )

  // console.log("🎯 fetchData в App:", fetchData)

  return (
    <div className="app">
      <AppHeader fetchData={fetchData} />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  )
}

export default App
