import React from 'react'
import Item from '../Item/Item' 
import "../ItemList/ItemList.css"

const ItemList = ({productList}) => {
  return (
    <div>
      <h2>Lista de Servicios</h2>
      <div className='gallery'>
          {productList.map((product) => <Item key={product.id} product={product}/>)}
      </div>
    </div>
    
  )
}

export default ItemList