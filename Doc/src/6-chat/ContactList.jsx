import { useState } from "react"
import AddContactPopup from "./AddContactPopup"

export default function ContactList({ contacts, selectedId, dispatch }) {
  const [showPopup, setShowPopup] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const handleAddContact = ({ name, email }) => {
    dispatch({
      type: "add_contact",
      name,
      email,
    })
  }

  return (
    <section className="contact-list">
      <ul className="contact__list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                })
              }}>
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setIsPopupOpen(true)}>Add a new contact</button>

      {isPopupOpen && (
        <AddContactPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          onSave={handleAddContact}
        />
      )}
    </section>
  )
}
