import "./App.css"

import ThemeProvider from "./context/ThemeProvider"
import ThemeSwitcher from "./components/ThemeSwitcher"
import ThemeDisplay from "./components/ThemeDisplay"
import "./styles/themes.scss"

function App() {
  return (
    <ThemeProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}>
        <h1>Переключение темы</h1>
        <ThemeSwitcher />
        <ThemeDisplay />
      </div>
    </ThemeProvider>
  )
}

export default App
