import "./App.css"
import AppInfo from "./components/app-info/app-info"
import SearchPanel from "./components/search-panel/search-panel"
import AppFilter from "./components/app-filter/app-filter"
import EmployeesList from "./components/employees-list/employees-list"
import EmployeesAddForm from "./components/employees-add-form/employees-add-form"

function App() {
  const data = [
    { name: "Dasha K.", salary: 800, increase: false },
    { name: "Svetlana E.", salary: 15000, increase: true },
    { name: "Artyom E.", salary: 50000, increase: true },
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
