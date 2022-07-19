import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { cartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { qtyProducts } = useContext(cartContext)
    return(
        <>
            <ShoppingCartOutlinedIcon color="success" fontSize="large" />
            {qtyProducts > 0 ? <h2> {qtyProducts} </h2> : ''}
        </>
    )
}

export default CartWidget;