import { useState } from "react"

import "./App.css"

function App() {
  const [status, setStatus] = useState("typing")
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState(null)

  if (status === "success") {
    return <h2>That's right!</h2>
  }

  const handleChangeTextarea = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      await submitForm(answer)
      setStatus("success")
    } catch (error) {
      setStatus("typing")
      setError(error)
    }
  }

  const submitForm = async (answer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let response = answer.toLowerCase() !== "lima"
        if (response) {
          reject(new Error("Good guess but a wrong answer. Try again!"))
        } else {
          resolve()
        }
      }, 1500)
    })
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChangeTextarea}
          value={answer}
          disabled={status === "submitting"}
        />
        <br />
        <button
          type="submit"
          disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {error != null && (
          <p style={{ color: "red", fontSize: "32px" }}>{error.message}</p>
        )}
      </form>
    </>
  )
}

export default App
