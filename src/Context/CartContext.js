import React, { createContext, useState, useEffect } from 'react';

export const cartContext = createContext();
const { Provider } = cartContext;

const CartCustomProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQuantity = () => {
        let qty = 0;
        products.forEach( product => qty += product.qty);
        setQtyProducts(qty);
    }

    useEffect(() => {
      getQuantity();
    }, [products])
    
    const addItem = (item) => {
        if (isInCart(item.id)){
            const index = products.indexOf(products.find(p => p.id === item.id));
            const aux = [...products];
            aux[index].qty += item.qty;
            setProducts(aux)
        }else{
            setProducts([...products, item])
        }
    }

    const removeItem = (itemId) => {
        setProducts(products.filter(item => item.id !== itemId));
    }

    const isInCart = (itemId) => {
        return products.some(item => item.id === itemId);
    }

    const clear = () => {
       setProducts([]); 
       setQtyProducts(0);
    }

    const calculateTotal = () => {
        let count = 0;
        products.forEach((prod) => {
            count += prod.qty * prod.price;
        })
        return count;
    }

    return (
        <Provider value={{ products, addItem, removeItem, isInCart, clear, qtyProducts, calculateTotal}}>
            {children}
        </Provider>
    )
}

export default CartCustomProvider;