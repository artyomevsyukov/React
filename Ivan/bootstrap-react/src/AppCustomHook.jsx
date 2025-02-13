import { Container } from "react-bootstrap"
import "./App.css"
import { useState } from "react"

function useInputWithValidate(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const validateInput = () => {
    return value.search(/\d/) >= 0 ? true : false
  }

  return { value: value, onChange: onChange, validateInput: validateInput }
}

const Form = () => {
  // const [text, setText] = useState("")
  // const [textAria, setTextAria] = useState("")

  const input = useInputWithValidate("")
  const textAria = useInputWithValidate("")

  const color = input.validateInput() ? "text-danger" : null

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input
            value={`${input.value} / ${textAria.value}`}
            type="text"
            className="form-control"
            readOnly
          />
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <input
            onChange={input.onChange}
            type="email"
            value={input.value}
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={textAria.value}
            onChange={textAria.onChange}
            id="exampleFormControlTextarea1"
            rows="3"></textarea>
        </div>
      </form>
    </Container>
  )
}

function AppCustomHook() {
  return <Form />
}

export default AppCustomHook
