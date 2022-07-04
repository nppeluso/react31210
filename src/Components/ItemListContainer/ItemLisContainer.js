import React, { useEffect, useState } from "react";
import "./ItemListContainer.css"
import { SpinnerRoundFilled } from 'spinners-react';
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
                {loading ? <SpinnerRoundFilled size="10%"/> : <ItemList productList={productList}/>}
            </div>
        </div> 
    )
}

export default ItemListContainer;