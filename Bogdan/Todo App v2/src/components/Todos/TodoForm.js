import styles from "./TodoForm.module.css"
import { useState } from "react"
import { Button } from "../UI/Button"

function TodoForm({ submit }) {
  const [inputValue, setInputValue] = useState("")

  function handleFormSubmit(event) {
    event.preventDefault()
    if (!inputValue) {
      return
    }
    submit({ text: inputValue })
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
          name="text"
          type="text"
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
