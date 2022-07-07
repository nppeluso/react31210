import React, { useEffect, useState } from 'react';
import { getItem } from "../../mocks/fakeApi";
import ItemDetail from '../ItemDetail/ItemDetail';
import { SpinnerInfinity } from 'spinners-react';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({id}) => {
    const { productIdLink } = useParams();
    console.log(productIdLink)
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getItem(productIdLink).then((response) => setProduct(response))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [productIdLink])

    return (
        <div className="landing">
            {loading ? <SpinnerInfinity thickness='200' secondaryColor='rgba(0,96,255,0.33)'/> : <ItemDetail product={product} />}
        </div>
    )
}

export default ItemDetailContainer