import { useState } from "react"

function Login() {
  const formFields = [
    { name: "test", type: "text", label: "Test" },
    { name: "username", type: "text", label: "Username" },
    { name: "password", type: "password", label: "Password" },
  ]

  const [data, setData] = useState({ username: "", password: "", test: "" })

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log(data)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    // setData({ ...data, [name]: value })
    setData((prevData) => ({ ...prevData, [name]: value })) //устраняет проблему когда текущее
    // значение состояния, которое может быть устаревшим из-за асинхронности setState
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        {formFields.map(({ name, type, label }) => (
          <div key={name}>
            <label htmlFor={name}>{label}:</label>
            <input id={name} name={name} type={type} value={data[name]} onChange={handleInputChange} />
          </div>
        ))}
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
