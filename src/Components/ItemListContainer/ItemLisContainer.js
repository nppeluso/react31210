import React, { useEffect, useState } from "react";
import { SpinnerRoundFilled } from 'spinners-react';
import ItemList from "../ItemList/ItemList";
import { getInfo } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    
    /* Desafío Promises & MAP - Catálogo con MAPS y Promises */
    const [productList,setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        getInfo(categoryId).then((response) => setProductList(response))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    return(
        <div>
            <div className="landing">
                {loading ? <SpinnerRoundFilled size="10%"/> : <ItemList productList={productList}/>}
            </div>
        </div> 
    )
}

export default ItemListContainer;