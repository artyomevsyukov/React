import "./App.css"
import PetInfo from "./components/PetInfo"

function App() {
  const age = 12
  return (
    <div className="App">
      {/* <PetInfo animal="dog" age={age} hasPet={true} /> */}
      <PetInfo animal="dog" age={age} hasPet />
      {/* <PetInfo animal="dog" age={age} hasPet={false} /> */}
      <PetInfo animal="dog" age={age} />
    </div>
  )
}

export default App
