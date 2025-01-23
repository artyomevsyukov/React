import "./employees-list.css"
import EmployeesListItem from "../employees-list-item/employees-list-item"

function EmployeesList({ data }) {
  // function sortItem(a, b) {
  //   if (a.salary > b.salary) {
  //     return 1
  //   } else {
  //     return -1
  //   }
  // }

  const elements = data.map((item) => {
    const { id, ...itemProps } = item
    return <EmployeesListItem key={id} {...itemProps} />
  })

  return <ul className="app-list list-group">{elements}</ul>
}
export default EmployeesList
