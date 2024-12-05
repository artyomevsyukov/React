import "./App.css"
import RandomNumber from "./components/RandomNumber"
// import PetInfo from "./components/PetInfo"

function App() {
  return (
    <div className="App">
      {/* <PetInfo animal="dog" age={age} hasPet={true} /> */}
      {/* <PetInfo animal="dog" age='12' hasPet /> */}
      {/* <PetInfo animal="dog" age={age} hasPet={false} /> */}
      {/* <PetInfo animal="dog" age="12" /> */}
      <RandomNumber maxNum={1000} />
    </div>
  )
}

export default App
