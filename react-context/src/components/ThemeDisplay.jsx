// src/components/ThemeDisplay.js
import { useContext, useEffect } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeDisplay = () => {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    console.log(`Тема изменилась: ${theme}`)
  }, [theme])

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        padding: "20px",
        textAlign: "center",
        borderRadius: "5px",
        marginTop: "10px",
      }}>
      Текущая тема: {theme}
    </div>
  )
}

export default ThemeDisplay
