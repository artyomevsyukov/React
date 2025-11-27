import { cartActions } from "../../store/cart-slice"
import styles from "./CartItem.module.css"
import { useDispatch } from "react-redux"

const CartItem = (props) => {
  const { title, quantity, price, id } = props.product
  const dispatch = useDispatch()
  const increaseHandler = () => {
    dispatch(cartActions.increase(id))
  }
  const decreaseHandler = () => {
    dispatch(cartActions.decrease(id))
  }

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${(price * quantity).toFixed(2)}{" "}
          <span className={styles["item-price"]}>
            (${price.toFixed(2)} / шт.)
          </span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
