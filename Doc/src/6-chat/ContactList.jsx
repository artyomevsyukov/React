import { useState } from "react"
import AddContactPopup from "./AddContactPopup"

export default function ContactList({ contacts, selectedId, dispatch }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleAddContact = ({ name, email }) => {
    dispatch({
      type: "add_contact",
      name,
      email,
    })
  }

  return (
    <section className="contact-list">
      <ul>
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

      <button onClick={() => setShowPopup(true)}>Add a new contact</button>

      {showPopup && (
        <AddContactPopup
          onSave={handleAddContact}
          onClose={() => setShowPopup(false)}
        />
      )}
    </section>
  )
}
