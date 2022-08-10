import { useForm } from 'react-hook-form';
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'

const FormSales = ({ finalizarCompra }) => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = (data) => {
        finalizarCompra(data)
    }

    const emailMatch = (value) => {
        return (watch('email') === value ? true : false); 
    }

    return (
        <div>
            <Card style={{ padding: "20px 5px" }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Ingrese información del Comprador</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={1}>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Nombre" placeholder="Ingrese su Nombre" variant="outlined" fullWidth {...register('name')}></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Apellido" placeholder="Ingrese su Apellido" variant="outlined" fullWidth required {...register('lastName')}></TextField>
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Email" placeholder="Ingrese su Email" variant="outlined" fullWidth required {...register('email', {
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                                })}>
                                </TextField>
                                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField label="Repetir Email" placeholder="Repita el email ingresado" variant="outlined" fullWidth required {...register('emailRepetition',{
                                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                    validate: emailMatch
                                })}>
                                </TextField>
                                {errors.emailRepetition?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                                {errors.emailRepetition?.type === 'validate' && <p>La repetición del email debe coincidir con el ingresado anteriormente</p>}
                            </Grid>
                            <Grid xs={12} sm={6} item>
                                <TextField type="number" label="Teléfono" placeholder="Ingrese su Numero de Telefóno" variant="outlined" fullWidth required {...register('number')}></TextField>
                            </Grid>
                            <Grid xs={6} sm={6} item>
                                <TextField label="Dirección" placeholder="Ingrese su Dirección" variant="outlined" fullWidth required {...register('address')}></TextField>
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Pedido</Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default FormSales