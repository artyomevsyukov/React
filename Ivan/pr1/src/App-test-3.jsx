import "./App.css"
import { Component } from "react"

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 30,
      text: "Click",
      position: "",
    }
  }

  // nextYear() {
  //   console.log("Click")
  // }
  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }))
  }

  commitInputChange = (e) => {
    // console.log(e.target.value)
    this.setState({ position: e.target.value })
  }

  render() {
    const { name, surname, link } = this.props
    const { position, years, text } = this.state
    return (
      <div>
        <button onClick={this.nextYear}>{text}</button>
        <h2>
          My name is {name}, surname - {surname}, age - {years}, position -{" "}
          {position}
        </h2>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChange} />
        </form>
        <div></div>
      </div>
    )
  }
}
function App2() {
  return (
    <div className="app">
      <WhoAmI name="John" surname="Smith" link="Facebook.com" />
      <WhoAmI name="Tom" surname="CL" link="Vk.com" />
    </div>
  )
}

export default App2
