import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Item.css"

const Item = ({product}) => {
    const {img, name, description, stock}=product;
  return (
    <div >
      <Card sx={{ maxWidth: 345 }} className="catalogue">
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
            Stock: {stock}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Ver más</Button>
        </CardActions>
      </Card>
    </div> 
  )
}

export default Item