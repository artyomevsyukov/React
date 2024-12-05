import styles from "./RandomNumber.module.css"
import { useState } from "react"
import { generateRandomNum } from "../utils/generateRandomNumber"

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
  const changeRandomNum = () => setRandomNum(() => generateRandomNum(maxNum))

  return (
    <div className={styles.RandomNumber}>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
