import "./appHeader.scss"
import { useCallback } from "react"
import MarvelService2 from "../../services/MarverService-2"

const AppHeader = () => {
  const marvelService = new MarvelService2()

  // Универсальный обработчик кликов
  const fetchData = useCallback((method) => {
    marvelService[method]()
      .then((data) => console.log(data))
      .catch((err) => console.error(err))
  }, [])

  // Массив ссылок
  const links = [
    { name: "Characters", method: "getAllCharacters" },
    { name: "Comics", method: "getAllComics" },
  ]

  return (
    <header className="app__header">
      <h1 className="app__title">
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className="app__menu">
        <ul>
          {links.map(({ name, method }) => (
            <li key={name}>
              <a href="#" onClick={() => fetchData(method)}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader
