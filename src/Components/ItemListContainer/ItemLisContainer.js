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
    },[])

    return(
        <div>
            <div className="landing">
                {loading ? <p>Cargando...</p> : <ItemList productList={productList}/>}
            </div>
        </div> 
    )
}

export default ItemListContainer;