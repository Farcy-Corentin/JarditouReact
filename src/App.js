import './App.css';
import { commerce } from './lib/commerce'
import { Products, NavBar } from './components'
import { useState, useEffect } from "react";

function App() {
    const [products, setProducts] = useState([])
    const fetchProduct = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    console.log(products);

  return (
    <div className="App">
        <NavBar />
       <Products products={products} />
    </div>
  );
}

export default App;
