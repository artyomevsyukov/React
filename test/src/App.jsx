import "./app.css"
import { useState, useEffect } from "react"

// Это вариант с запросом, чтобы он нормально работал после активации - уберите все props,
// которые приходят в компонент + аргумент initial поменяйте на 0 или null

const useCounter = () => {
  const [counter, setCounter] = useState(null)
  const [initialValue, setInitialValue] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchRandomNumber = async () => {
    setLoading(true)
    try {
      const res = await fetch(
        "https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new"
      )
      const num = Number(await res.text())
      return num
    } catch (err) {
      console.error(err)
      return 0 // В случае ошибки - вернуть 0
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomNumber().then((num) => {
      setCounter(num)
      setInitialValue(num)
    })
  }, [])

  const incCounter = () => {
    setCounter((prev) => (prev < 50 ? prev + 1 : prev))
  }

  const decCounter = () => {
    setCounter((prev) => (prev > -50 ? prev - 1 : prev))
  }

  const rndCounter = () => {
    setCounter(+(Math.random() * 100 - 50).toFixed(0))
  }

  const rndApi = async () => {
    const num = await fetchRandomNumber()
    setCounter(num)
  }

  const resetCounter = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    incCounter,
    decCounter,
    rndCounter,
    resetCounter,
    rndApi,
    loading,
  }
}

const Counter = () => {
  const counter = useCounter()

  return (
    <div className="component">
      <div className="counter">{counter.counter}</div>
      <div className="controls">
        <button onClick={counter.incCounter}>INC</button>
        <button onClick={counter.decCounter}>DEC</button>
        <button onClick={counter.rndCounter}>RND</button>
        <button onClick={counter.resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const RndCounter = () => {
  const counter = useCounter()

  return (
    <div className="component">
      <div className="counter">{counter.counter}</div>
      <div className="controls">
        <button onClick={counter.rndCounter}>RND</button>
        <button onClick={counter.rndApi}>RND API</button>
        <button onClick={counter.resetCounter}>RESET</button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <>
      {/* <Counter counter={0} />
      <RndCounter counter={5} /> */}
      <Counter />
      <RndCounter />
    </>
  )
}

export default App
