import React from 'react';
import { Button, ButtonGroup, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useItemCount } from '../../Hooks/useItemCount';

const ItemCount = ({stock, initial, onAdd}) => {

  const {count, carrito} = useItemCount(stock);
  
  return (
    <div className="contador">
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button variant="contained" endIcon={<RemoveIcon />} onClick={()=>count(-1*initial)}></Button>
          <TextField id="outlined-basic" label={carrito} variant="outlined"></TextField>
          <Button variant="contained" endIcon={<AddIcon />} onClick={()=>count(1*initial)}></Button>
          <Button variant="outlined" onClick={()=>onAdd(carrito)}>Agregar al Carrito</Button>
        </ButtonGroup>
    </div>
  )
}

export default ItemCount;
