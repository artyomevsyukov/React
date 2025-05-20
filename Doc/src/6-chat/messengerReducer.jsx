import { nanoid } from "nanoid"

export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
  isLoading: true,
}

export function messengerReducer(state, action) {
  const newId = action.id || nanoid()

  switch (action.type) {
    case "contacts_loaded":
      return {
        ...state,
        contacts: action.contacts,
        isLoading: false,
      }
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      }
    }
    case "add_contact":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            id: newId,
            name: action.name,
            email: action.email,
          },
        ],
        messages: {
          ...state.messages,
          [newId]: `Hello, ${action.name}`, // Автоматическое приветствие
        },
        selectedId: newId, // Опционально: сразу выбрать новый контакт
      }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      }
    }
    case "sent_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
