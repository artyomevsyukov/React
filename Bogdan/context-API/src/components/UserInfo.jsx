import UserContext from "../context/UserContext"
import { useContext } from "react"
function UserInfo() {
  const { userName } = useContext(UserContext)

  return <h1>{userName}</h1>
  //
  // return (
  //   <UserContext.Consumer>{(value) => <h1>{value}</h1>}</UserContext.Consumer>
  // )
}

export default UserInfo
