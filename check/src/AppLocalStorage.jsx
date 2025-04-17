import { useEffect, useState, useRef } from "react"

const AppLocalStorage = () => {
  const initialData = [
    {
      id: 1,
      title: "Подготовка к походу",
      post: "Горные походы открывают удивительные природные ландшафт",
      date: "2024-02-11T21:00:00.000Z",
    },
    {
      id: 2,
      title: "Поход в годы, подготовка к походу и сборы ",
      post: "Думал, что очень много времени",
      date: "2024-02-11T21:00:00.000Z",
    },
  ]

  const titleRef = useRef()
  const dateRef = useRef()
  const postRef = useRef()

  // =================================
  const useLocalStorage = (key, initialValue = []) => {
    useEffect(() => {
      console.log("storedData use: ", data)
    }, [])
    // const getLocalStorageData = () => {
    //   try {
    //     const storedData = localStorage.getItem(key)
    //     if (!storedData) return initialValue
    //     console.log("storedData: ", storedData)

    //     const parsedData = JSON.parse(storedData)
    //     // Преобразуем строки дат обратно в объекты Date

    //     return parsedData
    //     // return parsedData.map(item => ({
    //     //     ...item,
    //     //     date: new Date(item.date), // 🔥 Важно!
    //     // }));
    //   } catch (error) {
    //     console.error("Error reading from localStorage:", error)
    //     return initialValue
    //   }
    // }
    const getLocalStorageData = () => {
      try {
        const storedData = localStorage.getItem(key)
        if (!storedData) return initialValue
        return JSON.parse(storedData)
      } catch (error) {
        console.error("Error reading from localStorage:", error)
        return initialValue
      }
    }

    const [data, setData] = useState(getLocalStorageData)

    // const saveData = (newData) => {
    //   try {
    //     localStorage.setItem(key, JSON.stringify(newData))
    //     setData(newData)
    //   } catch (error) {
    //     console.error("Error saving to localStorage:", error)
    //   }
    // }
    const saveData = (newData) => {
      try {
        const dataToSave =
          typeof newData === "function" ? newData(data) : newData
        localStorage.setItem(key, JSON.stringify(dataToSave))
        setData(dataToSave)
      } catch (error) {
        console.error("Error saving to localStorage:", error)
      }
    }

    return [data, saveData]
  }
  // =================================

  const [todos, setTodos] = useLocalStorage("d1", initialData)
  const [formData, setFormData] = useState({
    title: "",
    date: new Date().toISOString().slice(0, 10),
    tag: "",
    post: "",
  })

  const addTodo = (newTodo) => {
    console.log("newTodo.date: ", newTodo.date)
    console.log("todos: ", todos)
    setTodos((prev) => [
      ...prev,
      {
        ...newTodo,
        // date: new Date(newTodo.date),
        date: new Date(newTodo.date).toISOString(),
        id: Date.now(),
      },
    ])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("formatData: ", formData)

    addTodo(formData)
    setFormData({ title: "", date: "", tag: "", post: "" })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        ref={titleRef}
        value={formData.title}
        // isValid={isValid.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        ref={dateRef}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <input
        type="text"
        name="tag"
        value={formData.tag}
        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
      />
      <textarea
        type="text"
        name="post"
        value={formData.post}
        ref={postRef}
        onChange={(e) =>
          setFormData({ ...formData, post: e.target.value })
        }></textarea>

      <button type="submit">Сохранить</button>
    </form>
  )
}
export default AppLocalStorage
