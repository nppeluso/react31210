import React from 'react'
import Item from '../Item/Item' 

const ItemList = ({productList}) => {
  return (
    <div>
        <h2>Lista de Servicios</h2>
        <div style={{display:"flex"}}>
            {productList.map((product) => <Item key={product.id} product={product}/>)}
        </div>
    </div>
    
  )
}

export default ItemList