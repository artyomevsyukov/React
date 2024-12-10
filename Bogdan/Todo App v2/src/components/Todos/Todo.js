import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri"
import { FaCheck } from "react-icons/fa"

import styles from "./Todo.module.css"

export function Todo({ text, id, isCompleted, deleteTodo, togleTodo }) {
  return (
    <div
      className={`${styles.todo} ${isCompleted ? styles.completedTodo : ""}`}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(id)}
      />
      <FaCheck className={styles.checkIcon} onClick={() => togleTodo(id)} />
    </div>
  )
}
