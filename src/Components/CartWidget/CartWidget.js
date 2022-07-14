import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { cartContext } from "../../Context/CartContext";

const CartWidget = () => {
    const { qtyProducts } = useContext(cartContext)
    return(
        <>
            <ShoppingCartOutlinedIcon color="success" fontSize="large" />
            <p>{qtyProducts}</p>
        </>
    )
}

export default CartWidget;