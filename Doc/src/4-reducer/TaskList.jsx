import { useEffect, useRef, useState } from "react"
import { useTasks, useTasksDispatch } from "./TaskContext"
import styles from "./App.module.css"

const TaskList = () => {
  const tasks = useTasks()

  return (
    <ul className={styles["task-list"]}>
      {tasks.map((task) => {
        return (
          <li key={task.id} className={styles["task-list__item"]}>
            <Task task={task} />
          </li>
        )
      })}
    </ul>
  )
}

const Task = ({ task }) => {
  // const [text, setText] = useState(task.text)
  const [isEdited, setIsEdited] = useState(false)
  const inputRef = useRef(null)
  const dispatch = useTasksDispatch()

  useEffect(() => {
    // if (isEdited && inputRef.current) {
    if (isEdited) {
      // inputRef.current?.focus()
      inputRef.current?.select()
    }
  }, [isEdited])

  let taskContent
  if (isEdited) {
    taskContent = (
      <>
        <input
          value={task.text}
          ref={inputRef}
          // autoFocus
          onChange={(e) =>
            dispatch({
              type: "change",
              task: { ...task, text: e.target.value },
            })
          }
        />
        <button
          className={styles["button"]}
          onClick={() => {
            setIsEdited(false)
          }}>
          Save
        </button>
      </>
    )
  } else {
    taskContent = (
      <>
        <p className={styles["text"]}>{task.text}</p>
        <button
          className={styles["button"]}
          onClick={() => {
            setIsEdited(true)
            inputRef.current.focus()
          }}>
          Edit
        </button>
      </>
    )
  }

  return (
    <label className={styles["task"]}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: "change",
            task: { ...task, done: e.target.checked },
          })
        }}
      />
      {taskContent}
      <button
        className={styles["button"]}
        onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </label>
  )
}

export default TaskList
