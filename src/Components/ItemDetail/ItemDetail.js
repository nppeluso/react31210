import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({product}) => {
  const {name, fullDescription, price, stock, thumbnail_1, thumbnail_2}=product;
  const onAdd = (carrito) => {
    if (carrito <= stock){
        alert("Pedido realizado! Cantidad encargada: " + carrito,2);
    }else{
        alert("Stock insuficiente! Debe seleccionar menos de: " + stock,2)
    }
}

  return (
    <div>
      <h1>{name}</h1>
      <h2>{fullDescription}</h2>
      <h3>$ {price}</h3>
      <h4>Stock: {stock}</h4>
      <img src={thumbnail_1} alt="thumbnail_1"></img>
      <img src={thumbnail_2} alt="thumbnail_2"></img>

      <ItemCount stock={stock} initial='1' onAdd={onAdd}/>
    </div>
  )
}

export default ItemDetail