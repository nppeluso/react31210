import React, { useEffect, useState } from 'react';
import { getItem } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';
import { SpinnerInfinity } from 'spinners-react';

const ItemDetailContainer = ({id}) => {
    const productId = id;

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem(productId).then((response) => setProduct(response))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [productId])

    return (
        <div>
            {loading ? <SpinnerInfinity thickness='200' secondaryColor='rgba(0,96,255,0.33)'/> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer