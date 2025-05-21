import { useState, useEffect } from "react"
import "./AddContactPopup.css"

export default function AddContactPopup({ onSave, onClose, isOpen }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState({ email: "" })

  // Валидация email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)

    if (value && !validateEmail(value)) {
      setErrors({ email: "Please enter a valid email address" })
    } else {
      setErrors({ email: "" })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Проверка перед отправкой
    if (!validateEmail(email)) {
      setErrors({ email: "Please enter a valid email address" })
      return
    }

    if (name.trim() && email.trim()) {
      onSave({ name, email })
      setName("")
      setEmail("")
      setErrors({ email: "" })
      onClose()
    }
  }

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

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`popup-overlay ${isOpen ? "active" : ""}`}
      onClick={handleOverlayClick}>
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
              onChange={handleEmailChange}
              required
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="popup-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" disabled={!!errors.email}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
