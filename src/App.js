import './App.css';
import { commerce } from './lib/commerce'
import { Products, NavBar, Cart } from './components'
import { useState, useEffect } from "react";


function App() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({});
    const fetchProduct = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId,quantity);

        setCart(item.cart)
    }

    useEffect(() => {
        fetchProduct();
        fetchCart();
    }, []);

  return (
    <div className="App">
        <NavBar totalItems={cart.total_items} />
        {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
        <Cart cart={cart} />
    </div>
  );
}

export default App;
