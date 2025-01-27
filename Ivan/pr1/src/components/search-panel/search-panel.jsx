import "./search-panel.css"
import { Component } from "react"

class SearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: "",
    }
  }

  onValueChange = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.onValueChange}
        value={this.state.term}
        className="form-control search-input"
        placeholder="Найти сотрудника"
      />
    )
  }
}

export default SearchPanel
