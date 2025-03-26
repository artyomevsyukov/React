import { AppProviders } from "./providers/AppProviders"
import RecipesList from "./components/RecipesList"
import "./App.css"
import BarList from "./components/BarList"

function App() {
  return (
    <AppProviders>
      <RecipesList />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <BarList />
    </AppProviders>
  )
}

export default App
