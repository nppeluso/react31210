import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import icon from "../../assets/guarderia.png"
import Typography from '@mui/material/Typography';
import "./NavBar.css"
import { Link, NavLink  } from "react-router-dom";

const categories = [
    { name: "Guarderia" ,       id: 0,   route: "/category/Guarderia" },
    { name: "Adiestramiento" ,  id: 3,   route: "/category/Adiestramiento" },
    { name: "Juguetes" ,        id: 1,   route: "/category/Juguetes" },
    { name: "Accesorios" ,      id: 2,   route: "/category/Accesorios" }
]
const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/"><img src={icon} alt=""></img></Link>
            <Typography gutterBottom variant="h7" component="div">
                <h1>Guardería BetyVero</h1>
            </Typography>
            <nav>
                {categories.map((category) => <NavLink key={category.id} to={category.route}>{category.name}</NavLink>)}
            </nav>
            <div className="cart">
                <Link to="/Cart"><CartWidget/></Link>
            </div>
        </div>
    )
}

export default NavBar;
