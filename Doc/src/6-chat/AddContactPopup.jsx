import { useState, useEffect } from "react"
import "./AddContactPopup.css"

export default function AddContactPopup({ onSave, onClose, isOpen }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // Закрытие по ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Закрытие по клику на оверлей
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && email.trim()) {
      onSave({ name, email })
      setName("")
      setEmail("")
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="popup-overlay active" onClick={handleOverlayClick}>
      <div className="popup-content">
        <h3>Add New Contact</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="popup-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
