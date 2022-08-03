import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom';
import "../ItemList/ItemList.css"

const ItemList = ({ productList }) => {
  return (
    <>
      {
        productList.length !== 0 ?
          <div>
            <h2>Lista de Productos</h2>
            <div className='gallery'>
              {productList.map((product) => <Item key={product.id} product={product} />)
              }
            </div>
          </div>
          : <h2> Disculpe no hay productos para la Categoría seleccionada. Haz click <Link to='/'>aquí</Link> para volver al landing page</h2>
      }
    </>
  )
}

export default ItemList