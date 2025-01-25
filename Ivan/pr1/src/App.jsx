import "./App.css"
import { v4 as uuidv4 } from "uuid"
import { Component } from "react"
import AppInfo from "./components/app-info/app-info"
import SearchPanel from "./components/search-panel/search-panel"
import AppFilter from "./components/app-filter/app-filter"
import EmployeesList from "./components/employees-list/employees-list"
import EmployeesAddForm from "./components/employees-add-form/employees-add-form"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Dasha K.", salary: 800, increase: false, id: 1 },
        { name: "Artyom E.", salary: 500000, increase: true, id: 3 },
        { name: "Svetlana E.", salary: 15000, increase: true, id: 2 },
      ],
    }
  }

  addUser = (name, salary) => {
    const newUser = {
      name,
      salary,
      increase: false,
      id: uuidv4(),
    }
    this.setState(({ data }) => {
      return { data: [...data, newUser] }
    })
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAddUser={this.addUser} />
      </div>
    )
  }
}

export default App
