import styles from "./TodosActions.module.css"
import { Button } from "../UI/Button"
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"

export function TodosActions({
  deleteCompletedTodos,
  resetTodos,
  completedTodoExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodos}>
        <RiRefreshLine title="Reset Todos" />
      </Button>
      <Button onClick={deleteCompletedTodos} disabled={!completedTodoExist}>
        <RiDeleteBin2Line title="Clear completed todos" />
      </Button>
    </div>
  )
}
