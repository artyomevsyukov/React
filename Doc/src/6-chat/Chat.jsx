import { useRef, useEffect } from "react"

export default function Chat({ contact, draftMessage, dispatch, selectedId }) {
  useEffect(() => {
    textareaRef.current?.select()
  }, [selectedId])

  const textareaRef = useRef(null)
  return (
    <section className="chat">
      <textarea
        ref={textareaRef}
        value={draftMessage}
        placeholder={"Chat to " + contact.name}
        onChange={(e) => {
          dispatch({
            type: "edited_draftMessage",
            draftMessage: e.target.value,
          })
        }}
      />
      <br />
      <button
        onClick={() => {
          // alert(`Sending "${draftMessage}" to ${contact.email}`)
          textareaRef.current.focus()
          if (draftMessage.length > 0) {
            dispatch({
              type: "sent_message",
              text: draftMessage,
            })
          }
        }}>
        Send to {contact.email}
      </button>
    </section>
  )
}
