import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import icon from "../../assets/guarderia.jpg"
import "./NavBar.css"


const NavBar = () => {
    return (
        <div className="navBar">
            <img src={icon} alt=""></img>
            <h1>Guardería BetyVero</h1>
            <nav>
                <a href="#"> Guardería </a>
                <a href="#"> Productos </a>
                <a href="#"> Imágenes del predio </a>
                <a href="#"> Adiestramiento </a>
            </nav>
            <CartWidget />
        </div>
    )
}

export default NavBar;
