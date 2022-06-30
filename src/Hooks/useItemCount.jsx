import { useState } from 'react';

export const useItemCount = (stock) => {
    const [carrito, setCarrito] = useState(0);

    const count = (value) => {
        const result = carrito + value;
        if (result <= stock & result >= 0) {
            setCarrito(carrito + value)
        }
    }

    return {
        count, carrito
    }
}
