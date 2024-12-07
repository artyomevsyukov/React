import CN from "classnames"
import "../App.css"
import styles from "./Header.module.scss"

import { useEffect, useState } from "react"

function Header() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    document.title = `Вы нажали ${count}`
  }, [count])

  return (
    <div /* className={`title ${styles.header} `} */>
      <h1 className={CN("title", styles.header__title, styles.header)}>Заголовок был нажат {count} раз</h1>
      <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      <button onClick={() => setCount2((count2) => count2 + 1)}>count2 is {count2}</button>
    </div>
  )
}

export default Header
