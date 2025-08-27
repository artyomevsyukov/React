import { useHttp } from "../../hooks/http.hook"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHero } from "../../redux/slices/heroesSlice"
import { selectFilters } from "../../redux/slices/filtersSlice"
import createHero from "../../utils/createHero"
import getElementName from "../../utils/getElementName"

const HeroesAddForm = () => {
  const filters = useSelector(selectFilters)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [element, setElement] = useState("")
  const { request } = useHttp()
  const dispatch = useDispatch()

  // const handleAddHero = (hero) => {
  //   request(`http://localhost:3001/heroes`, "POST", JSON.stringify(hero), {
  //     "Content-Type": "application/json",
  //   })
  //     .then((data) => {
  //       dispatch(addHero(data))
  //       setName("")
  //       setDescription("")
  //       setElement("")
  //     })
  //     .catch((error) => console.log("Ошибка создания героя", error))
  // }

  const handleAddHero = async (hero) => {
    try {
      const data = await request(
        `http://localhost:3001/heroes`,
        "POST",
        JSON.stringify(hero),
        { "Content-Type": "application/json" }
      )

      dispatch(addHero(data))
      setName("")
      setDescription("")
      setElement("")
    } catch (error) {
      console.log("Ошибка создания героя", error)
    }
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
          <option value="">Я владею элементом...</option>
          {filters
            ?.filter((filter) => filter.name !== "all")
            .map((filter) => (
              <option key={filter.id} value={filter.name}>
                {getElementName(filter.name)}
              </option>
            ))}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  )
}

export default HeroesAddForm
