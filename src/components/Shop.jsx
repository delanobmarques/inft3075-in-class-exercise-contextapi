import Cart from "./Cart"
import Products from "./Products"
const Shop = ({cart, setCart, products, setProducts}) => {
  return (
    <div className="shop">
      <Cart {...{cart, setCart}}/>
      <Products {...{products, setCart}}/>
    </div>
  )
}
export default Shop