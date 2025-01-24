// import "./employees-add-form.css"

// const EmployeesAddForm = () => {
//   return (
//     <div className="app-add-form">
//       <h3>Добавьте нового сотрудника</h3>
//       <form className="add-form d-flex">
//         <input
//           type="text"
//           className="form-control new-post-label"
//           placeholder="Как его зовут?"
//         />
//         <input
//           type="number"
//           className="form-control new-post-label"
//           placeholder="З/П в $?"
//         />

//         <button type="submit" className="btn btn-outline-light">
//           Добавить
//         </button>
//       </form>
//     </div>
//   )
// }

// export default EmployeesAddForm
import "./employees-add-form.css"
import { Component } from "react"

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      salary: "",
    }
  }

  onValueChange = (e) => {
    console.log(e.target.value)
    this.setState({ [e.target.name]: [e.target.value] })
  }

  render() {
    const { name, salary } = this.state

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            onChange={this.onValueChange}
            type="text"
            name="name"
            value={name}
            className="form-control new-post-label"
            placeholder="Как его зовут?"
          />
          <input
            onChange={this.onValueChange}
            type="number"
            name="salary"
            value={salary}
            className="form-control new-post-label"
            placeholder="З/П в $?"
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm
