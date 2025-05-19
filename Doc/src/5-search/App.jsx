import { useState } from "react"
import { foods, filterItems } from "./data.js"

export default function App5() {
  const [query, setQuery] = useState("")
  const filteredFoods = filterItems(foods, query)

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <hr />
      <List items={filteredFoods} />
    </>
  )
}

function SearchBar({ query, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value)
  }

  return (
    <label>
      Search: <input value={query} onChange={handleChange} />
    </label>
  )
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
