import React from "react";
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    console.log('Cantidad: ', {greeting});
    return(
        <div className="landing">
            {greeting}
        </div>
    )
}

export default ItemListContainer;