import React, { useState } from "react"

function DynamicForm() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    email: "",
    agreeToTerms: false,
    gender: "",
  })

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value, // Используем checked для чекбоксов
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
            <input
              type={
                key === "password"
                  ? "password"
                  : key === "email"
                  ? "email"
                  : key === "agreeToTerms"
                  ? "checkbox"
                  : key === "gender"
                  ? "radio"
                  : "text" // По умолчанию
              }
              name={key}
              value={key === "agreeToTerms" ? undefined : formValues[key]}
              checked={key === "agreeToTerms" ? formValues[key] : undefined}
              onChange={handleChange}
            />
          </label>
          {key === "gender" && (
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formValues.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formValues.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  )
}

export default DynamicForm
