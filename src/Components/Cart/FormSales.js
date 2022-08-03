import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'

const FormSales = ({finalizarCompra}) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        finalizarCompra(data)
    }

    return (
        <div>
            <Card style={{padding:"20px 5px"}}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Ingrese información del Comprador</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Nombre" placeholder="Ingrese su Nombre" variant="outlined" fullWidth required {...register('name')}></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Apellido" placeholder="Ingrese su Apellido" variant="outlined" fullWidth required {...register('lastName')}></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Email" placeholder="Ingrese su Email" variant="outlined" fullWidth required {...register('email')}></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField type="number" label="Teléfono" placeholder="Ingrese su Numero de Telefóno" variant="outlined" fullWidth required {...register('number')}></TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <TextField label="Dirección" placeholder="Ingrese su Dirección" variant="outlined" fullWidth required {...register('address')}></TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Concretar Pedido</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default FormSales