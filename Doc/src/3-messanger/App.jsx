import { useState } from "react"

import styles from "./App.module.css"

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
]

function App3() {
  const [to, setTo] = useState(contacts[0])
  return (
    <section>
      <h2>Chat</h2>
      <ChatList
        contacts={contacts}
        // setTo={setTo}
        onSelect={(contact) => setTo(contact)}
      />
      {/* Не сбрасывает состояние */}
      <Chat to={to} />
      {/* Сбрасывает состояние */}
      <Chat to={to} key={to.email} />
      <MyForm />
    </section>
  )
}

function ChatList({ contacts, onSelect }) {
  return (
    <section className={styles["contact-list"]}>
      <ul>
        {contacts.map((contact) => {
          return (
            <li key={contact.email}>
              <button onClick={() => onSelect(contact)}>{contact.name}</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function Chat({ to }) {
  const [text, setText] = useState("")
  return (
    <section className={styles["chat"]}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={"Chat to " + to.name}
      />
      <br />
      <button>{to.email}</button>
    </section>
  )
}

function MyForm() {
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    console.log(Object.fromEntries(formData))
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" value="yes" />
      </label>
      <hr />
      <div>
        Radio buttons:
        <label>
          <input type="radio" name="myRadio1" value="option1" />
          Option 1
        </label>
        <label>
          <input type="radio" name="myRadio2" value="option2" />
          Option 2
        </label>
        <label>
          <input type="radio" name="myRadio3" value="option3" />
          Option 3
        </label>
        <hr />
        <label>
          <input type="color" name="myRadio4" />
          Option 3
        </label>
        <hr />
        <label>
          <input type="datetime-local" name="myRadio5" />
          Option 3
        </label>
        <hr />
        <label>
          <input type="range" name="myRadio6" />
          Option 3
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default App3
