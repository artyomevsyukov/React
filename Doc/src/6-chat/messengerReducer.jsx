import { nanoid } from "nanoid"

export const initialState = {
  selectedId: 0,
  draftMessages: {
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
            messages: [],
          },
        ],
        draftMessages: {
          ...state.draftMessages,
          [newId]: `Hello, ${action.name}`,
        },
        selectedId: newId, // сразу выбрать новый контакт
      }
    case "edited_draftMessage": {
      return {
        ...state,
        draftMessages: {
          ...state.draftMessages,
          [state.selectedId]: action.draftMessage,
        },
      }
    }

    case "sent_message": {
      return {
        ...state,
        draftMessages: {
          ...state.draftMessages,
          [state.selectedId]: "",
        },
        contacts: state.contacts.map((contact) =>
          contact.id === state.selectedId
            ? {
                ...contact,
                messages: [
                  ...contact.messages,
                  {
                    status: "sent",
                    timestamp: new Date().toISOString(),
                    // text: state.draftMessages[state.selectedId],
                    text: action.text,
                    id: nanoid(),
                  },
                ],
              }
            : contact
        ),
      }
    }
    case "delete_message": {
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === state.selectedId
            ? {
                ...contact,
                messages: contact.messages.filter(
                  (message) => message.id !== action.id
                ),
              }
            : contact
        ),
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
