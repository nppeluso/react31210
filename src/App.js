import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemLisContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import CartCustomProvider from './Context/CartContext';

const App = () => {
  return (
    <BrowserRouter>
      <CartCustomProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={< ItemListContainer />} />
          <Route path="/product/:productIdLink" element={<ItemDetailContainer />} />
          <Route path="/cart" element="" />
        </Routes>
      </CartCustomProvider>
    </BrowserRouter>
  )
}

export default App;
