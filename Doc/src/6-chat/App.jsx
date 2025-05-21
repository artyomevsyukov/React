import { useReducer, useEffect } from "react"
import Chat from "./Chat.jsx"
import ContactList from "./ContactList.jsx"
import { initialState, messengerReducer } from "./messengerReducer"
import "./styles.css"
import Messages from "./Messages.jsx"

export default function App6() {
  const [state, dispatch] = useReducer(
    messengerReducer,
    initialState,
    setInitialState
  )
  const draftMessage = state?.draftMessages?.[state.selectedId] || ""

  function setInitialState() {
    try {
      const savedState = localStorage.getItem("contacts")
      return savedState
        ? JSON.parse(savedState)
        : { ...initialState, isLoading: true }
    } catch (error) {
      console.error("Ошибка при загрузке из localStorage:", error)
      return { ...initialState, isLoading: true }
    }
  }

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state))
  }, [state])

  useEffect(() => {
    if (state.isLoading) {
      fetchContacts().then((contacts) => {
        setTimeout(() => {
          dispatch({ type: "contacts_loaded", contacts })
        }, 2000)
        if (contacts.length > 0) {
          dispatch({ type: "changed_selection", contactId: contacts[0].id })
        }
      })
    }
  }, [state.isLoading])

  if (state.isLoading) return <div>Loading...</div>

  const selectedContact = state.contacts.find((c) => c.id === state.selectedId)

  return (
    <>
      <div className="top">
        <ContactList
          contacts={state.contacts}
          selectedId={state.selectedId}
          dispatch={dispatch}
        />
        <Chat
          selectedId={state.selectedId}
          draftMessage={draftMessage}
          contact={selectedContact}
          dispatch={dispatch}
        />
      </div>
      <Messages contact={selectedContact} dispatch={dispatch} />
    </>
  )
}

const fetchContacts = async () => [
  { id: 0, name: "Taylor", email: "taylor@mail.com", messages: [] },
  { id: 1, name: "Alice", email: "alice@mail.com", messages: [] },
  { id: 2, name: "Bob", email: "bob@mail.com", messages: [] },
]
