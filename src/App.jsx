import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './component/header/Navbar';
import RoutesApp from './routes/RoutesApp'
import axios  from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => setProducts(response.data.products));

  }, []);
  console.log(products);
  return (
    <>
      <Navbar/>
      <RoutesApp />
    </>
  )
}

export default App;
