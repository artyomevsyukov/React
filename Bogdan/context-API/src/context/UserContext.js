import { createContext } from "react"

// const UserContext = createContext({name:'Artyom', isLoggedIn: false,})
// const UserContext = createContext("A")
// const UserContext = createContext()
const UserContext = createContext({
  userName: "",
  changeUserName: () => {},
})

export default UserContext
