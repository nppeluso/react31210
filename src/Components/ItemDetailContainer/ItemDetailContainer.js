import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { SpinnerInfinity } from 'spinners-react';
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";

const ItemDetailContainer = ({id}) => {
    const { productIdLink } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    //useEffect(() => {
    //    const productsCollection = collection(db, 'products');
    //    const refDoc = doc(productsCollection, productIdLink);
    //},[])

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const refDoc = doc(productsCollection, productIdLink);
        getDoc(refDoc).then(result => {
            setProduct({
                id:  result.id,
                ...result.data()
            })
        })
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