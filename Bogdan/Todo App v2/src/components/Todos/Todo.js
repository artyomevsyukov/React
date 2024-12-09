import { RiTodoFill } from "react-icons/ri"
import styles from "./Todo.module.css"

export function Todo({ text, id, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(id)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  )
}
