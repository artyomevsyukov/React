import { AppProviders } from "./providers/AppProviders"
import RecipesList from "./components/RecipesList"
import "./App.css"
import BarList from "./components/BarList"

function App() {
  return (
    <AppProviders>
      <RecipesList />
    </AppProviders>
  )
}

export default App
