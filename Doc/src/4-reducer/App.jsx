import AddTask from "./AddTask"
import TaskList from "./TaskList"
import "./App.css"
import { TasksProvider } from "./TaskContext"

function App4() {
  return (
    <>
      <TasksProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  )
}

export default App4
