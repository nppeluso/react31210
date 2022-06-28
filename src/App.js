import React from 'react';
import ItemListContainer from './Components/ItemListContainer/ItemLisContainer';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='CATALOGO'/>
    </>
  )
}

export default App;
