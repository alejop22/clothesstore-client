import React from "react";
import '../container/App.css';
import { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import Home from '../components/home/Home';
import Footer from '../components/footer/Footer';
import ShoppingCar from "../components/shopping/ShoppingCar";
import { Route, Routes } from "react-router-dom";

function App() {

  const [products, setProducts] = useState([]); 
  const [shopingCar, setShoppingCar] = useState([]); 

  const searchProducts = async (product) => {

    try {
      const auxProducts = [];
      const rs = await fetch(`https://api.mercadolibre.com/sites/MCO/search?category=MCO1430&q=${product}`);
      const data = await rs.json();

      for (let i = 0; i < 12; i++) {
        auxProducts.push(data.results[i]);
      }

      setProducts(auxProducts);
    } catch (error) {
      throw error;      
    }
  }

  const addShoppingCar = (product) => {
    setShoppingCar(prev => ([...prev, product]));
  }

  const deleteProduct = (id) => {
    setShoppingCar(prev => prev.filter(prod => prod.id !== id));
  }

  return (
    <div className="App">
      <NavBar searchProducts={searchProducts}/>
      <Routes>
        <Route path="/" element={<Home products={products} addShoppingCar={addShoppingCar}/>}/>
        <Route path="/shopping" element={<ShoppingCar shopingCar={shopingCar} deleteProduct={deleteProduct}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
