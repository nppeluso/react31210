import React, { useEffect, useState } from "react";
import { SpinnerRoundFilled } from 'spinners-react';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        const q = categoryId ? query(productsCollection, where('category', '==', categoryId )) : productsCollection;

        getDocs(q)
            .then(result => {
                const list = result.docs.map(product => {
                    return { id: product.id, ...product.data() }
                })
                setProductList(list);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    return (

            <div className="landing">
                {loading ? <SpinnerRoundFilled size="10%" /> : <ItemList productList={productList} />}
            </div>

    )
}

export default ItemListContainer;