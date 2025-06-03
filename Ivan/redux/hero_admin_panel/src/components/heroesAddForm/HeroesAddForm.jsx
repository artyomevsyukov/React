// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { useHttp } from "../../hooks/http.hook"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addHero } from "../../actions"
import createHero from "../../utils/createHero"

const HeroesAddForm = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [element, setElement] = useState("")
  const dispatch = useDispatch()
  const { request } = useHttp()

  const handleAddHero = (hero) => {
    request(`http://localhost:3001/heroes`, "POST", JSON.stringify(hero), {
      "Content-Type": "application/json",
    })
      .then((data) => {
        dispatch(addHero(data))
        setName("")
        setDescription("")
        setElement("")
      })
      .catch((error) => console.log("Ошибка удаления", error))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const hero = createHero({ name, description, element })
    handleAddHero(hero)
  }

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          value={element}
          onChange={(e) => setElement(e.target.value)}
          required
          className="form-select"
          id="element"
          name="element">
          <option>Я владею элементом...</option>
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  )
}

export default HeroesAddForm
