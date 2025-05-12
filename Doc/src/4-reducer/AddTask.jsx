import { useState, useEffect, useRef } from "react"
import { useTasks, useTasksDispatch } from "./TaskContext"
import styles from "./App.module.css"

const AddTask = () => {
  const [text, setText] = useState("")
  const dispatch = useTasksDispatch()
  const inputRef = useRef(null)

  const tasks = useTasks()
  useEffect(() => {
    console.log("Tasks: ", tasks)
  }, [tasks])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const handleInputKeyDown = (e) => {
    if (e.code === "Enter") {
      addTask()
    }
  }

  const addTask = () => {
    if (text.trim().length > 0) {
      dispatch({ type: "added", text: text })
      setText("")
    } else return
  }

  return (
    <section className={styles["add-task"]}>
      <input
        value={text}
        ref={inputRef}
        placeholder={"Add task"}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleInputKeyDown}
      />
      <button onClick={addTask}>Add</button>
    </section>
  )
}
export default AddTask
