const Products = ({products, setCart}) => {
    const addItem = (product) => {
      setCart(cart => [...cart, product])
    }
    return (
      <div className="products">
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addItem(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  export default Products
  