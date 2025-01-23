import "./employees-list.css"
import EmployeesListItem from "../employees-list-item/employees-list-item"

function EmployeesList({ data }) {
  const elements = data.map((item) => {
    const increase = item.increase
    return (
      <EmployeesListItem className={increase ? "increase" : ""} {...item} />
    )
  })

  return <ul className="app-list list-group">{elements}</ul>
}
export default EmployeesList
