import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import './Cart.css';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import FormSales from './FormSales';
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Cart = () => {
    const { products, removeItem, calculateTotal } = useContext(cartContext);
    const [goToForm, setGoToForm] = useState(false);

    const finalizarCompra = (userDetails) => {
        const ventasCollection = collection(db, 'ventas');
        addDoc(ventasCollection, {
            comprador: userDetails,
            items: products.map(product => ({ id: product.id, name: product.name, Precio: product.price, Cantidad: product.qty })),
            date: serverTimestamp(),
            total: calculateTotal(),
        })
        .then(({ id }) => Swal.fire('Gracias por su compra! Su ID de compra es: ' + id))
    }

    return (
        <div>
            <div>
                {
                    products.length === 0 ?
                        <h2>El carrito esta vacío. Haga click <Link to='/'>aquí</Link> para volver al landing page</h2>

                        :
                        <>{
                            products.map((prod) => (
                                <div key={prod.id} className='cartDetail'>

                                    <img src={prod.img} width='70px' alt="Product img" />
                                    <h2>Producto: {prod.name}</h2>
                                    <h2>Precio: ${prod.price}</h2>
                                    <h2>Cantidad {prod.qty}</h2>
                                    <Button variant="contained" size="small" onClick={ () =>
                                        Swal.fire({
                                            title: '¿Seguro que quieres eliminar este productos del Carrito?',
                                            text: "Una vez eliminado no podrás revertirlo",
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonColor: '#3085d6',
                                            cancelButtonColor: '#d33',
                                            confirmButtonText: 'Si, eliminar producto'
                                          }).then((result) => {
                                            if (result.isConfirmed) {
                                              Swal.fire(
                                                'Borrado',
                                                'El carrito fue eliminado',
                                                'success'
                                              )
                                              .then(() => removeItem(prod.id)
                                              )
                                            }
                                          })
                                        }>Remover</Button>
                                </div>
                            ))}
                            <h3> Total: ${calculateTotal()}</h3>
                            <Button variant="contained" size="small" onClick={ () => { setGoToForm(true) }}>Cargar pedido</Button>
                            {goToForm ? <FormSales finalizarCompra={finalizarCompra}/> : ''}
                        </>
                }
            </div>
        </div >
    )
}

export default Cart;