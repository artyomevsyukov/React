import "./appHeader.scss"
// import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { Link, NavLink } from "react-router-dom"

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="#">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              to="/"
              // activeStyle={{ color: "#9f0013" }}
              style={({ isActive }) => ({ color: isActive ? "#9f0013" : "" })}>
              Characters
            </NavLink>
          </li>
          /
          <li>
            {/* <NavLink  to="/comics" activeStyle={{ color: "blue" }}> */}
            <NavLink
              // end // для строгого сравнения, если убрать то будет активный для всех путей дальше
              to="/comics"
              // activeClassName="app__link"
              className={({ isActive }) => "" + (isActive ? "app__link" : "")}>
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default AppHeader
