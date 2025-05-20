import { useReducer, useEffect } from "react"
import Chat from "./Chat.jsx"
import ContactList from "./ContactList.jsx"
import { initialState, messengerReducer } from "./messengerReducer"
import "./styles.css"

export default function App6() {
  const [state, dispatch] = useReducer(messengerReducer, initialState)
  const message = state.messages[state.selectedId]

  useEffect(() => {
    fetchContacts().then((contacts) => {
      setTimeout(() => {
        dispatch({ type: "contacts_loaded", contacts })
      }, 2000)
      if (contacts.length > 0) {
        dispatch({ type: "changed_selection", contactId: contacts[0].id })
      }
    })
  }, [])

  useEffect(() => {
    console.log("state: ", state)
  }, [state])

  if (state.isLoading) return <div>Loading...</div>

  //   const selectedContact = contacts.find((c) => c.id === state.selectedId)
  const selectedContact = state.contacts.find((c) => c.id === state.selectedId)
  return (
    <div>
      <ContactList
        // contacts={contacts}
        contacts={state.contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={selectedContact.id}
        message={message}
        contact={selectedContact}
        dispatch={dispatch}
      />
    </div>
  )
}

// const contacts = [
//   { id: 0, name: "Taylor", email: "taylor@mail.com" },
//   { id: 1, name: "Alice", email: "alice@mail.com" },
//   { id: 2, name: "Bob", email: "bob@mail.com" },
// ]

const fetchContacts = async () => [
  { id: 0, name: "Taylor", email: "taylor@mail.com", messages: [] },
  { id: 1, name: "Alice", email: "alice@mail.com", messages: [] },
  { id: 2, name: "Bob", email: "bob@mail.com", messages: [] },
]
