import React from "react";
import icon from "../assets/guarderia.jpg"
import "./../Styles/NavBar.css"

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const NavBar = () => {
    return (
        <>
            <img src={icon} alt=""></img>
            <h1>Guardería BetyVero</h1>
            <nav>
                <a href="#"> Guardería </a>
                <a href="#"> Productos </a>
                <a href="#"> Imágenes del predio </a>
                <a href="#"> Adiestramiento </a>
            </nav>
            <ShoppingCartOutlinedIcon color="success" fontSize="large" />

        </>
    )
}

export default NavBar;
