import { useSelector } from "react-redux"
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import { selectIsCartOpen } from "./store/cart-slice"

function App() {
  const isCartOpen = useSelector(selectIsCartOpen)
  console.log("APP isCartOpen: ", isCartOpen)
  return (
    <Layout>
      {isCartOpen && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
