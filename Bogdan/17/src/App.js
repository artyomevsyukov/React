import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import Counter from "./components/Counter"

const texts = ["Click me!", "Click me please", "Hit me", "Press me"]

function App() {
  const [count, setCount] = useState(1)
  const incrementCount = () => setCount(count + 1)

  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button click={incrementCount} texts={"Click me!"} />
      <Button click={incrementCount} texts="Click me please" />
      <Button click={incrementCount} texts="Hit me" />
      <Button click={incrementCount} texts="Press me" /> */}
      {texts.map((text) => {
        return <Button click={incrementCount} text={text} key={text} />
      })}
    </div>
  )
}

export default App
