import styles from "./TodoList.module.css"
import { Todo } from "./Todo"

export function TodoList({ items, deleteTodo }) {
  if (items.length === 0) {
    return <p className={styles.p}>Записей пока нет, добавьте первую</p>
  }

  return (
    <div className={styles.todoListContainer}>
      {items.map((item) => {
        return (
          <Todo
            key={item.id}
            id={item.id}
            body={item.body}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </div>
  )
}
