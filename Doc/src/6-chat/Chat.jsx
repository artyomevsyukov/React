export default function Chat({ contact, draftMessage, dispatch }) {
  return (
    <section className="chat">
      <textarea
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
          dispatch({
            type: "sent_message",
            text: draftMessage,
          })
        }}>
        Send to {contact.email}
      </button>
    </section>
  )
}
