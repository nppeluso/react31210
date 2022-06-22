import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemLisContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting='CATALOGO'/>
    </>
  )
}

export default App;
