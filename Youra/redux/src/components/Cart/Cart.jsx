import { useDispatch, useSelector } from "react-redux"
import Card from "../UI/Card"
import styles from "./Cart.module.css"
import CartItem from "./CartItem"
import { cartActions, selectCartItems } from "../../store/cart-slice"

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  console.log("CART cartItems: ", cartItems)
  if (cartItems.length === 0) {
    return null
    // Заглушку?
  }
  return (
    <Card className={styles.cart}>
      <h2>Мои Покупки</h2>

      <ul>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <button onClick={() => dispatch(cartActions.clear())}>
        Очистить корзину
      </button>
    </Card>
  )
}

export default Cart
