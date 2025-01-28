// import "./employees-add-form.css"
import "./employees-add-form.scss"
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
    // this.setState({ [e.target.name]: [e.target.value] })
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.state.name.length < 3 || !this.state.salary) return
    this.props.onAddUser(this.state.name, this.state.salary)

    this.setState({
      name: "",
      salary: "",
    })
  }

  render() {
    const { name, salary } = this.state

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
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
