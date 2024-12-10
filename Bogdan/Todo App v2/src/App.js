import styles from "./App.module.css"

import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import TodoForm from "./components/Todos/TodoForm"
import { TodoList } from "./components/Todos/TodoList"
import { TodosActions } from "./components/Todos/TodosActions"

function App() {
  const [todos, setTodos] = useState([])

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
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function togleTodoHandler(id) {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
        // : todo Что лучше?  минимизирует количество изменений в состоянии (state), что оптимизирует ререндеринг?

        // if (todo.id === id) {
        //   return { ...todo, isCompleted: !todo.isCompleted }
        // }
        // return { ...todo }
      })
    )
  }

  function deleteCompletedTodosHendler() {
    setTodos(todos.filter((todo) => todo.isCompleted === false))
    // setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  function resetTodosHandler() {
    setTodos([])
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  console.log("completedTodosCount: ", completedTodosCount)

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo App</h1>
      <TodoForm submit={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodoExist={!!completedTodosCount}
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHendler}
        />
      )}

      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        togleTodo={togleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <div className={styles.complited}>
          {`You have complited ${completedTodosCount} ${
            completedTodosCount > 1 ? "todos" : "todo"
          }!`}
        </div>
      )}
    </div>
  )
}

export default App
