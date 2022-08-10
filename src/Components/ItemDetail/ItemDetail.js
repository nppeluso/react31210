import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';
import { cartContext } from '../../Context/CartContext';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import './ItemDeail.css';

const ItemDetail = ({ product }) => {
  const { name, bproductExist, fullDescription, img, price, stock, thumbnail_1, thumbnail_2 } = product;
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useContext(cartContext);

  const onAdd = (carrito) => {
    const producto = { ...product, qty: carrito };
    if (carrito === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor elija una cantidad mayor a 0 y menor al stock.',
        footer: ""
      });
    } else if (carrito <= stock) {
      addItem(producto);
      setGoToCart(true);
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Stock insuficiente! Debe seleccionar menos de: ' + stock,
        footer: ""
      });
    }
  }

  return (
    <>
      {bproductExist ?
        <div id="details">
          <Container maxWidth="sm">
            <h1>{name}</h1>
            <h2>{fullDescription}</h2>

            <div id="images">
              <img src={img} alt="img"></img>
              <img src={thumbnail_1} alt="thumbnail_1"></img>
              <img src={thumbnail_2} alt="thumbnail_2"></img>
            </div>

            <div id="numbers">
              <h3>PRECIO {price}</h3>
              <h4>STOCK: {stock}</h4>
            </div>
            {
              goToCart ? <Button variant="contained" size="small"><Link to='/cart'>Finalizar Compra</Link></Button> : <ItemCount stock={stock} initial='1' onAdd={onAdd} />
            }

          </Container>

        </div>
        :
        <h2>Disculpe. No existe el producto. Haga click <Link to='/'>aquí</Link> para volver al landing page</h2>}
    </>



  )
}

export default ItemDetail