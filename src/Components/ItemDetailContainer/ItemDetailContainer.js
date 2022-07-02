import React, { useEffect, useState } from 'react'
import { getItem } from "../../mocks/fakeApi";

const [item, setItemList]=useState([]);
const [loading, setLoading] = useState(true);


useEffect(()=>{
    getItem.then((response) => setItemList(response))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
},[])

console.log("ITEM: " + JSON.stringify(item));

const ItemDetailContainer = () => {
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer