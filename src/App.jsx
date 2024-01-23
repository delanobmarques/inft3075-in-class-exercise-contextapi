import { useState } from 'react'
import './App.css'
import Shop from './components/Shop';
const App = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([
    {id: 1001, name: "Apple", price: 1.99},
    {id: 1002, name: "Banana", price: 0.79},
    {id: 1003, name: "Carrot", price: 1.49},
    {id: 1003, name: "Tomato", price: 1.55},
  ])
  return (
    <div className="app">
      <h1>Online Grocery Store</h1>
      <Shop {...{ cart, setCart, products, setProducts }}/>
    </div>
  )
}
export default App
