import { useDispatch, useSelector } from "react-redux"
import styles from "./CartButton.module.css"
import { selectCartItems, cartActions } from "../../store/cart-slice"
import { useCallback } from "react"

const CartButton = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const quantity = items.reduce((acc, i) => acc + i.quantity, 0)

  const handleClick = useCallback(() => {
    dispatch(cartActions.toggleShowCart())
  }, [dispatch])

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${styles.bump}`}
      key={quantity}>
      <span>Корзина</span>
      <span className={styles.badge}>{quantity}</span>
    </button>
  )
}

export default CartButton
