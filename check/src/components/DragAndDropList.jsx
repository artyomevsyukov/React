import { useState } from "react"

export function DragAndDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"])
  const [draggedItem, setDraggedItem] = useState(null)

  const handleDragStart = (index) => setDraggedItem(index)
  const handleDragOver = (e) => e.preventDefault()

  const handleDrop = (targetIndex) => {
    if (draggedItem === null) return
    const newItems = [...items]
    const [removed] = newItems.splice(draggedItem, 1)
    newItems.splice(targetIndex, 0, removed)
    setItems(newItems)
    setDraggedItem(null)
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            cursor: "move",
            padding: "8px",
            margin: "4px",
            border: "1px solid #ccc",
          }}>
          {item}
        </li>
      ))}
    </ul>
  )
}
