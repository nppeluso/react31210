import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDeail.css';
import Container from '@mui/material/Container';

const ItemDetail = ({ product }) => {
  const { name, fullDescription, img, price, stock, thumbnail_1, thumbnail_2 } = product;
  const onAdd = (carrito) => {
    if (carrito === 0) {
      alert("Por favor elija una cantidad mayor a 0 y menor al stock.");
    } else if (carrito <= stock) {
      alert("Pedido realizado! Cantidad encargada: " + carrito, 2);
    }
    else{
      alert("Stock insuficiente! Debe seleccionar menos de: " + stock, 2)
    }
  }

  return (
    <div id="details">
      <Container maxWidth="sm">
        <h1>{name}</h1>
        <h2>{fullDescription}</h2>

        <div id="images">
          <img src={img} alt="img"></img>
          <img src={thumbnail_1} alt="thumbnail_1"></img>
          <img src={thumbnail_2} alt="thumbnail_2"></img>
        </div>

        <div id="numbers">
          <h3>PRECIO {price}</h3>
          <h4>STOCK: {stock}</h4>
        </div>
        <ItemCount stock={stock} initial='1' onAdd={onAdd} />

      </Container>

    </div>
  )
}

export default ItemDetail