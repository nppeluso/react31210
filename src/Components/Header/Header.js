import React from "react";
import NavBar from "./../NavBar"
import "./../../Styles/Header.css"

const Header = () =>{
    return (
        <header>
            <NavBar />
        </header>
    )
}


/* Estilos con objetos -> util para react Native: 
 const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center';
    },
    imagen: {
        with: '10%';
    },
    anchors: {
        padding: 10
    }
 }

pondria los estilos asi

<header style={styles.container}>
 <img style={styles.imagen}
    etc...
*/

export default Header;