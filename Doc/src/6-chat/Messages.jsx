const Messages = ({ contact }) => {
  const { messages } = contact
  return (
    <div className="messagesList">
      <h1>{contact.name} messages</h1>
      <ul>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </ul>
    </div>
  )
}
export default Messages

const Message = ({ message }) => {
  const { timestamp, text, status } = message
  const date = new Date(timestamp)
  const formattedDate = new Intl.DateTimeFormat("ru-RU").format(date)

  return (
    <li className="message-item" style={{ display: "flex", gap: "15px" }}>
      <p>{formattedDate}</p>
      <p>{text}</p>
      <p>status: {status}</p>
    </li>
  )
}
