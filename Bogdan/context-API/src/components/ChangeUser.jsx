import UserContext from "../context/UserContext"
import { useContext } from "react"

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)
  return (
    <button
      onClick={() =>
        changeUserName(userName === "Artyom" ? "Alice" : "Artyom")
      }>
      Change User
    </button>
  )
  //   return <div>ChangeUser</div>
}

export default ChangeUser
