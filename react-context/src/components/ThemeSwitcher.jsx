import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: "var(--color-button-bg)",
        color: "var(--color-button-text)",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",
      }}>
      Переключить на {theme === "light" ? "тёмную" : "светлую"} тему
    </button>
  )
}

export default ThemeSwitcher
