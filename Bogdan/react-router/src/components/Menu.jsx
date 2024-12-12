import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <>
      <nav>
        <NavLink to="." end>
          Home
        </NavLink>
        <NavLink
          // className={({ isActive }) => (isActive ? "activeLink" : "link")}
          // style={({ isActive }) =>
          //   isActive ? { color: "green" } : {}
          // }
          to="contacts">
          Contacts
        </NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="courses" end>
          Courses
        </NavLink>
      </nav>
    </>
  )
}

export default Menu
