import styles from "./App.module.css"
import { useState } from "react"
import TodoForm from "./components/Todos/TodoForm"
import { TodoList } from "./components/Todos/TodoList"

function App() {
  const [items, setItems] = useState([])

  // useEffect(() => {
  //   if (items.length > 0) {
  //     console.log("+1 элемент в массив")
  //     console.log(items)
  //   }
  // }, [items])

  function addItemHandler(item) {
    setItems((oldItems) => {
      const nextId =
        oldItems.length > 0
          ? Math.max(...oldItems.map((item) => item.id)) + 1
          : 0

      return [
        ...oldItems,
        {
          body: item.body,
          id: nextId,
        },
      ]
    })
  }

  function deleteTodoHandler(id) {
    console.log("delete")
    setItems(items.filter((todo) => todo.id !== id))
  }

  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Todo App</h1>
      <TodoForm submit={addItemHandler} />
      <TodoList items={items} deleteTodo={deleteTodoHandler} />
    </div>
  )
}

export default App
