import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import icon from "../../assets/guarderia.jpg"
import Typography from '@mui/material/Typography';

import "./NavBar.css"
//import { Link, NavLinkde  } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <img src={icon} alt=""></img>
            <Typography gutterBottom variant="h7" component="div">
                <h1>Guardería BetyVero</h1>
            </Typography>
            <nav>
                <a href="#"> Guardería </a>
                <a href="#"> Productos </a>
                <a href="#"> Imágenes del predio </a>
                <a href="#"> Adiestramiento </a>
            </nav>
            <div className="cart">
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;
