import React, { useState } from "react"

function MultiInputForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    username: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Обновляем только то поле, которое изменилось
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted values:", formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formValues).map((key) => (
        <div key={key}>
          <label>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            <input type="text" name={key} value={formValues[key]} onChange={handleChange} />
          </label>
        </div>
      ))}
      <button type="submit">Отправить</button>
    </form>
  )
}

export default MultiInputForm
