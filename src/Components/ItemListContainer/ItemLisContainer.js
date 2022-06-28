import React from "react";
import "./ItemListContainer.css"
import ItemCount from "./../ItemCount/ItemCount"


const ItemListContainer = ({greeting}) => {
    console.log('Cantidad: ', {greeting});
    const stock = 30;
    const onAdd = (carrito) => {
        if (carrito <= stock){
            alert("Pedido realizado! Cantidad encargada: " + carrito,2);
        }else{
            alert("Stock insuficiente! Debe seleccionar menos de: " + stock,2)
        }
    }
    return(
        <div className="landing">
            {greeting}
            <ItemCount stock={stock} initial='1' onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;