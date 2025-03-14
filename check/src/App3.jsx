import { useState, useEffect } from "react"

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return position
}

const App = () => {
  const { x, y } = useMousePosition()

  return (
    <div>
      <h1>Move the mouse around!</h1>
      <p>
        The current mouse position is ({x}, {y})
      </p>
    </div>
  )
}

export default App
