import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import './Cart.css';
import Button from '@mui/material/Button';


const Cart = () => {
    const { products, removeItem, calculateTotal } = useContext(cartContext);
    return (
        <div>
            <div>
                {
                    products.length === 0 ?
                        <h2>El carrito esta vacío. Haz click <Link to='/'>aquí</Link> para volver al landing page</h2>

                        :
                        <>{
                            products.map((prod) => (
                                <div key={prod.id} className='cartDetail'>

                                    <img src={prod.img} width='70px' alt="Product img" />
                                    <h2>Producto: {prod.name}</h2>
                                    <h2>Precio: ${prod.price}</h2>
                                    <h2>Cantidad {prod.qty}</h2>
                                    <Button variant="contained" size="small" onClick={() => removeItem(prod.id)}>Remover</Button>
                                </div>
                            ))}
                            <h3> Total: ${calculateTotal()}</h3>
                        </>
                }
            </div>
        </div >
    )
}

export default Cart;