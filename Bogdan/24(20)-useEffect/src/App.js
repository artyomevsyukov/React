import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [todo, setTodo] = useState(null)

  useEffect(() => {
    console.log("callback")
    fetch("https://dummyjson.com/posts/7")
      .then((res) => res.json())
      .then((json) => setTodo(json))
  }, [])
  console.log("App render")

  return (
    <div className="App">
      <h1>{todo && todo.title}</h1>
    </div>
  )
}

export default App
