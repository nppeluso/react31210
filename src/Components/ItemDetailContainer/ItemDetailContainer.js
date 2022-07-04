import React, { useEffect, useState } from 'react';
import { getItem } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ id }) => {
    //const {id}=product;

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getItem.then((response) => setProduct(response))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    console.log("Product: " + JSON.stringify(product));
    return (
        <>
            {loading ? <p>Cargando...</p> : <ItemDetail product={product[0]} />}
        </>
    )
}

export default ItemDetailContainer