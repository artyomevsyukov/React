import "./App.css"
import AppInfo from "./components/app-info/app-info"
import SearchPanel from "./components/search-panel/search-panel"
import AppFilter from "./components/app-filter/app-filter"
import EmployeesList from "./components/employees-list/employees-list"
import EmployeesAddForm from "./components/employees-add-form/employees-add-form"

function App() {
  const data = [
    { name: "Dasha K.", salary: 800, increase: false, id: 1 },
    { name: "Artyom E.", salary: 500000, increase: true, id: 3 },
    { name: "Svetlana E.", salary: 15000, increase: true, id: 2 },
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  )
}

export default App
