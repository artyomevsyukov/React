import { useState } from "react"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleFormSubmit(event) {
    event.preventDefault()
    const userData = {
      username,
      password,
    }
    console.log(userData)
  }
  //   const handleChange = (event) => {
  //     setUsername(event.target.value)
  //   }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input name="username" value={username} type="text" onChange={(e) => setUsername(e.target.value)}></input>
        </label>
        <label>
          Password:
          <input name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
