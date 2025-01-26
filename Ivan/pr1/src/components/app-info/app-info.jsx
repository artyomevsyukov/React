import "./app-info.css"

const AppInfo = ({ quantityEmployees, quantityEmployeesWithBonus }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании REACT</h1>
      <h2>Общее число сотрудников: {quantityEmployees}</h2>
      <h2>Премии получат: {quantityEmployeesWithBonus} </h2>
    </div>
  )
}

export default AppInfo
