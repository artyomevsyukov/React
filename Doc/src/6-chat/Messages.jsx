const Messages = ({ contact, dispatch }) => {
  const { messages } = contact
  return (
    <section className="messagesList">
      <h1>{contact.name} messages</h1>
      <ul className="messages__list">
        {messages.map((message) => (
          <Message key={message.id} message={message} dispatch={dispatch} />
        ))}
      </ul>
    </section>
  )
}
export default Messages

const Message = ({ message, dispatch }) => {
  const { timestamp, text, status, id } = message
  const date = new Date(timestamp)
  const formattedDate = new Intl.DateTimeFormat("ru-RU").format(date)

  const handleDeleteButton = () => {
    console.log("id: ", id)
    dispatch({ type: "delete_message", id: id })
  }

  return (
    <li className="message-item" style={{ display: "flex", gap: "15px" }}>
      <p>{formattedDate}</p>
      <p>{text}</p>
      <p>status: {status}</p>
      <button className="delete" onClick={handleDeleteButton}>
        Delete message
      </button>
    </li>
  )
}
