import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, img, name, description, stock } = product;
  return (
      <Grid xs={12} sm={4} md={3} item>
        <Card sx={{ marginBottom: 4, marginRight: 4, textDecoration: 'none'}} className="catalogue">
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
          </CardContent>
          <CardActions>
            <Link to={`/product/${id}`}><Button variant="contained" size="small">Ver más</Button></Link>
          </CardActions>
        </Card>
      </Grid>

  )
}

export default Item