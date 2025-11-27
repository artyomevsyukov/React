import { useSelector } from "react-redux"
import styles from "./CartButton.module.css"
import { selectCartItems } from "../../store/cart-slice"

const CartButton = () => {
  const cartItems = useSelector(selectCartItems)
  const quantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0)

  return (
    <button className={styles.button}>
      <span>Корзина</span>
      <span className={styles.badge}>{quantity}</span>
    </button>
  )
}

export default CartButton
