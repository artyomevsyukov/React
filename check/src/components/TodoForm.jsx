import { useState } from "react"

function TodoForm({ todoAdd }) {
  const [text, setText] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    todoAdd(text)
    setText("")
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Введите текст"
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm
