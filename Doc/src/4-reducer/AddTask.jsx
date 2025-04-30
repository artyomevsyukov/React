import { useState, useEffect } from "react"
import { useTasks, useTasksDispatch } from "./TaskContext"

const AddTask = () => {
  const [text, setText] = useState("")
  const dispatch = useTasksDispatch()

  const tasks = useTasks()
  useEffect(() => {
    console.log("Tasks: ", tasks)
  }, [tasks])

  return (
    <section className="add-task">
      <input
        value={text}
        placeholder={"Add task"}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "added", text: text })
          setText("")
        }}>
        Add
      </button>
    </section>
  )
}
export default AddTask
