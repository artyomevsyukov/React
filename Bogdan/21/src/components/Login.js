function Login() {
  function handleFormSubmit(event) {
    event.preventDefault()
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    console.log(userData)
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input name="username" type="text"></input>
        </label>
        <label>
          Password:
          <input name="password" type="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
