import styles from "./TodoList.module.css"
import { Todo } from "./Todo"

export function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return <p className={styles.p}>Записей пока нет, добавьте первую</p>
  }

  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            id={todo.id}
            // todo={todo}
            text={todo.text}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </div>
  )
}
