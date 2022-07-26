import React, { useState } from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'

const FormSales = ({finalizarCompra}) => {
    const [userDetails, setUserDetails] = useState({});

    return (
        <div>
            <Card style={{padding:"20px 5px"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Ingrese información del Comprador</Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField onChange={(e) => {setUserDetails({...userDetails,name: e.target.value})}} label="Nombre" placeholder="Ingrese su Nombre" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField onChange={(e) => {setUserDetails({...userDetails,lastName: e.target.value})}} label="Apellido" placeholder="Ingrese su Apellido" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField onChange={(e) => {setUserDetails({...userDetails,email: e.target.value})}} label="Email" placeholder="Ingrese su Email" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField onChange={(e) => {setUserDetails({...userDetails,number: e.target.value})}} type="number" label="Teléfono" placeholder="Ingrese su Numero de Telefóno" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField onChange={(e) => {setUserDetails({...userDetails,address: e.target.value})}} label="Dirección" placeholder="Ingrese su Dirección" variant="outlined" fullWidth required></TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <Button onClick={()=>finalizarCompra(userDetails)} variant="contained" color="primary" fullWidth>Concretar Pedido</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default FormSales