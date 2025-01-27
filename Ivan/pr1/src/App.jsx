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
        { name: "Liza D.", salary: 600, increase: false, rise: false, id: 5 },
        { name: "Masha N.", salary: 1800, increase: false, rise: false, id: 4 },
        { name: "Dasha K.", salary: 800, increase: false, rise: false, id: 1 },
        {
          name: "Artyom E.",
          salary: 500000,
          increase: true,
          rise: true,
          id: 3,
        },
        {
          name: "Svetlana E.",
          salary: 15000,
          increase: true,
          rise: true,
          id: 2,
        },
      ],
      term: "",
    }
  }

  addUser = (name, salary) => {
    const newUser = {
      name,
      salary,
      increase: false,
      rise: false,
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

  // onToggleIncrease = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, increase: !item.increase }
  //       }
  //       return item
  //     }),
  //   }))
  // }

  // onToggleRise = (id) => {
  //   this.setState(({ data }) => ({
  //     data: data.map((item) => {
  //       if (item.id === id) {
  //         return { ...item, rise: !item.rise }
  //       }
  //       return item
  //     }),
  //   }))
  // }
  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item
      }),
    }))
  }

  searchEmp = (items, term) => {
    if (items.length === 0) {
      return
    }
    return items.filter((item) => item.name.indexOf(term) > -1)
  }

  onUpdateSearch = (term) => {
    this.setState({ term })
  }

  render() {
    const { data, term } = this.state
    const quantityEmployees = data.length
    const quantityEmployeesWithBonus = data.filter(
      (item) => item.increase
    ).length
    const visibleData = this.searchEmp(data, term)

    return (
      <div className="app">
        <AppInfo
          quantityEmployees={quantityEmployees}
          quantityEmployeesWithBonus={quantityEmployeesWithBonus}
        />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAddUser={this.addUser} />
      </div>
    )
  }
}

export default App
