import "./App.css"
import { useState } from "react"
import UserContext from "./context/UserContext"
import User from "./components/User"
import ChangeUser from "./components/ChangeUser"

function App() {
  const [user, setUser] = useState("Artyom")

  return (
    // <UserContext.Provider value={user}>
    <UserContext.Provider value={{ userName: user, changeUserName: setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  )
}

export default App
