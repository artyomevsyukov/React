import CartButton from "../Cart/CartButton"
import styles from "./MainHeader.module.css"

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
