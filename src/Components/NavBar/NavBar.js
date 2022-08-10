import React, { useEffect, useState } from 'react';
import CartWidget from "../CartWidget/CartWidget";
import icon from "../../assets/guarderia.png";
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';

const NavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categoryCollection = collection(db, 'categorias');
        getDocs(categoryCollection).then(result => {
                const listCategories = result.docs.map(category => {
                    return {
                        id: category.id,
                        ...category.data()
                    }
                })
                setCategories(listCategories);
            })
            .catch((error) => console.log(error))
        }, [])

    return (
        <div className="navBar">
            <Link to="/"><img src={icon} alt="" className="logo"></img></Link>
            
                <h1>Guardería BetyVero</h1>

            <nav className='menuElements'>
                {categories.map((category) => <NavLink class="link" key={category.id} to={category.route}>{category.name}</NavLink>)}
                <div className="cart">
                    <Link to="/Cart"><CartWidget /></Link>
                </div>
            </nav>
            
        </div>
    )
}

export default NavBar;
