import { useTasks } from "./TaskContext"

const TaskList = () => {
  const tasks = useTasks()

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="task-list__item">
            <Task task={task} />
          </li>
        )
      })}
    </ul>
  )
}

const Task = ({ task }) => {
  let taskContent
  if (task.done) {
    taskContent = (
      <>
        <p>{task.text}</p>
        {/* <button onClick={()=>{}}>Edit</button> */}
        <button onClick={() => {}}>Edit</button>
      </>
    )
  } else {
    taskContent = <p>2</p>
  }
  return (
    <label className="task">
      {/* <input type="checkbox" checked={task.done} onChange={}/> */}
      <input type="checkbox" checked={task.done} />
      {taskContent}
      <button>Delete</button>
    </label>
  )
}

export default TaskList
