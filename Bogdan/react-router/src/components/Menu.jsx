import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <>
      <nav>
        <NavLink
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          to="."
          end>
          Go to Home
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          // style={({ isActive }) =>
          //   isActive ? { color: "green" } : {}
          // }
          to="contacts">
          Go to Contacts
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          to="about">
          Go to Contacts
        </NavLink>
      </nav>
    </>
  )
}

export default Menu
