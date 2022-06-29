import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import ItemCount from "./../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";
import { getInfo } from "../../mocks/fakeApi";


const ItemListContainer = () => {
    /* Desafío Promises & MAP - Catálogo con MAPS y Promises */
    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        getInfo.then((response) => setProductList(response))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    })

    /* Desafío Componentes II - Contador con Botón */ 
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
            {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
            <ItemCount stock={stock} initial='1' onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;