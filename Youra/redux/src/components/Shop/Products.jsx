import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"
import { selectProducts } from "../../store/main-slice"
import styles from "./Products.module.css"

const Products = () => {
  const products = useSelector(selectProducts)

  return (
    <section className={styles.products}>
      <h2>В нашем магазине товары самого высокого качества</h2>
      <ul>
        {/* <ProductItem
                    title="Супер-Товар"
                    price={7}
                    description="Благодаря своему высокому качеству, этот товар прослужит вам очень долго."
                /> */}
        {products.map((product) => {
          return <ProductItem key={product.id} product={product} />
        })}
      </ul>
    </section>
  )
}

export default Products
