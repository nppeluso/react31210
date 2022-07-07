import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from "react-router-dom";

const Item = ({product}) => {
    const {id, img, name, description, stock}=product;
  return (
    <div >
      <Card sx={{ maxWidth: 345, marginBottom: 4 }} className="catalogue">
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            STOCK: {stock}
          </Typography>
            {/*<div>ItemDetailContainer: <ItemDetailContainer id={id}/></div>*/}
        </CardContent>
        <CardActions>
          <Link to={`/product/${id}`}><Button variant="contained" size="small">Ver más</Button></Link>
        </CardActions>
      </Card>
    </div> 
  )
}

export default Item