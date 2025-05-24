import { useState, useEffect, useRef } from "react"

import "./App.css"

function App7() {
  const [text, setText] = useState("")
  const [isSending, setIsSending] = useState(false)
  const timerIdRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => inputRef.current.focus(), [isSending])

  const handleSend = () => {
    setIsSending(true)
    timerIdRef.current = setTimeout(() => {
      console.log(`Send ${text}`)
      console.log(text)
      setIsSending(false)
    }, 1000)
  }

  const handleUndo = () => {
    setIsSending(false)
    clearTimeout(timerIdRef.current)
  }

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSend} disabled={isSending}>
        {isSending ? "...Sending" : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  )
}

export default App7
