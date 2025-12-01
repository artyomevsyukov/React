import styles from "./CartButton.module.css"
import { selectCartItems } from "../../store/cart-slice"
import { useSelector } from "react-redux"

const CartButton = () => {
  const items = useSelector(selectCartItems)
  const quantity = items.reduce((acc, i) => acc + i.quantity, 0)

  return (
    <button className={`${styles.button} ${styles.bump}`} key={quantity}>
      <span>Корзина</span>
      <span className={styles.badge}>{quantity}</span>
    </button>
  )
}

export default CartButton
