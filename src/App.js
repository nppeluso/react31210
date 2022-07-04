import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemLisContainer';
import NavBar from './Components/NavBar/NavBar';
//import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer/>
    </>
  )
}

export default App;
