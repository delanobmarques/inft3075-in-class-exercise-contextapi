const Cart = ({cart, setCart}) => {
    const getTotal = () => {
      return cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    }
    const removeItem = (id) => {
      setCart(cart.filter(item => item.id !== id))
    }
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${getTotal()}</p>
      </div>
    )
  }
  export default Cart
  