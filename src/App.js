import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemLisContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:categoryId" element={< ItemListContainer />}/>
          <Route path="/product/:productIdLink" element={<ItemDetailContainer />}/>
          <Route path="/cart" element=""/>
        </Routes>
      </BrowserRouter>
  ) 
}

export default App;
