import { createContext, useContext, useReducer } from "react"
import { nanoid } from "nanoid"

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

export function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskrsReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

const taskrsReducer = (tasks, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: nanoid(),
          text: action.text,
          done: false,
        },
      ]
    }
    case "change": {
      return 1
    }
    case "deleted": {
      return 1
    }

    default:
      throw new Error("Unknow action" + action.type)
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
]
