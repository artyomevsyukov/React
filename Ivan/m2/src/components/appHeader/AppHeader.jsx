import "./appHeader.scss"

const AppHeader = ({ fetchData }) => {
  // Массив ссылок
  const links = [
    { name: "Characters", method: "getAllCharacters" },
    { name: "Comics", method: "getAllComics" },
  ]

  // console.log("fetchData в AppHeader:", fetchData)

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
