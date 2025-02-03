import "./App.css"
import React, { Component } from "react"
import BootstrapTest1 from "./components/Bootstrap-test-1"
import BootstrapTest2 from "./components/Bootstrap-test-2"

const DynamicGreeting = (props) => {
  return (
    <div className={"mb-3 mt-3 p-3 border border-" + props.color}>
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          className: "shadow p-3 m-3 border rounded",
        })
      })}
      {/* {props.children} */}
    </div>
  )
}

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

function App() {
  return (
    <div className="container">
      <BootstrapTest2
        left={
          <DynamicGreeting color={"primary"}>
            <h2>Text-1</h2>
            <h2>Text-2</h2>
          </DynamicGreeting>
        }
        right={
          <DynamicGreeting color={"primary"}>
            <h2>RIGHT</h2>
            <h2>RIGHT</h2>
            <h2>RIGHT</h2>
            <h2>RIGHT</h2>
          </DynamicGreeting>
        }
      />
      <h2 className="container">=========================================</h2>
      <BootstrapTest1 />
      <h2 className="container">=========================================</h2>

      <div className="app">
        <DynamicGreeting color={"primary"}>
          <h2>Text-1</h2>
          <h2>Text-2</h2>
        </DynamicGreeting>

        <WhoAmI name="John" surname="Smith" link="Facebook.com" />
        <WhoAmI name="Tom" surname="CL" link="Vk.com" />
      </div>
    </div>
  )
}

export default App
