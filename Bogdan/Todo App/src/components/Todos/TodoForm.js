import { useState } from "react"
import styles from "./TodoForm.module.css"

function TodoForm({ submit }) {
  const [inputValue, setInputValue] = useState("")

  function handleFormSubmit(event) {
    event.preventDefault()
    submit({ body: inputValue })
    setInputValue("")
  }

  function handleChange(event) {
    setInputValue(event.target.value)
  }

  return (
    <div className={styles.todoFormContainer}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input
          className={styles.input}
          value={inputValue}
          onChange={handleChange}
          name="body"
          type="text"
          placeholder="Enter new todo"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default TodoForm
