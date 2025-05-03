import { useState } from "react"
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

  const dispatch = useTasksDispatch()
  let taskContent

  if (isEdited) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) =>
            dispatch({
              type: "change",
              task: { ...task, text: e.target.value },
            })
          }
        />
        <button
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
        <p>{task.text}</p>
        <button
          onClick={() => {
            setIsEdited(true)
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
      <button onClick={() => dispatch({ type: "deleted", id: task.id })}>
        Delete
      </button>
    </label>
  )
}

export default TaskList
