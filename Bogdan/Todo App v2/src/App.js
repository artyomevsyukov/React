import styles from "./App.module.css"

import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/Todos/TodoForm"
import { TodoList } from "./components/Todos/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   if (items.length > 0) {
  //     console.log("+1 элемент в массив")
  //     console.log(items)
  //   }
  // }, [items])

  function addTodoHandler(todo) {
    const newTodo = {
      text: todo.text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos((oldTodos) => {
      return [...oldTodos, newTodo]
    })
  }

  function deleteTodoHandler(id) {
    console.log("delete")
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo App</h1>
      <TodoForm submit={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
