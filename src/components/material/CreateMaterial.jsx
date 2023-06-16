import React from 'react'
// mui
import Button from '@mui/material/Button'
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SelectForm from '../forms/SelectForm'

const unitList = [{value: 'st'}, {value: 'm'}]
const quantityList = [...new Array(101)].map((each, index) => ({ qty: index, value: index }))
const hours = [...new Array(13)].map((each, index) => ({ hours: 60 * index, value: index }))
const minutes = [...new Array(61)].map((each, index) => ({ minutes: index, value: index }))
const categoryList = [
    {value: 'Apparater'},
    {value: 'Data'},
    {value: 'Belysning'},
    {value: 'Ovrigt'},
]

const CreateMaterial = ({ 
    handleDelete, 
    handleObjectInput, 
    errors, 
    register, 
    fittingsRef, 
    qtyRef, 
    unitRef, 
    extraItems,
    inputError,
}) => {


    return (
        <Grid container xs={12} >

            <Grid xs={12}>
                <Typography variant="h6" component="div" textAlign='start' marginBottom='2rem' sx={{ cursor: "default" }}>
                    <strong>Lägg till nytt material</strong> 
                </Typography>    
            </Grid>
    
            {/**
             *  Product
             */}

            <Grid xs={12} lg={6}>

                <TextField
                    id="product"
                    label="Produkt"
                    name="product"
                    autoComplete="product"
                    fullWidth
                    required
                    helperText={errors ? errors.product && 'Obligatoriskt fält' : ''}

                    {...register("product", {required: true})}
                />
            </Grid>

            {/**
             *  Category
             */}

            <Grid xs={12} lg={6} >
                <SelectForm 
                    required={true}
                    label="Kategori"
                    name="category"
                    defaultValue=""
                    list={categoryList}
                    helperText={errors ? errors.category && 'Obligatoriskt fält' : ''}

                    register={register("category", {required: true})}
                />  
            </Grid> 

      

            {/**
             *  Fittings
             */}

            <Grid xs={12} sm={6} >
                <TextField
                    required
                    id="fittings"
                    label="Tillbehör"
                    name="fittings"
                    autoComplete="fittings"
                    fullWidth
                    inputRef={fittingsRef}
                    helperText={errors ? errors.fittings && 'Obligatoriskt fält' : ''}

                    // keep ...register. Otherwise the helper text will not be visible.
                    {...register("fittings", {required: true})}
                />
            </Grid> 

            {/**
             *  Quantity
             */}

            <Grid xs={5} sm={2} lg={2} >
                <SelectForm 
                    required={true}
                    label="Antal"
                    name="qty"
                    inputRef={qtyRef}
                    defaultValue=""
                    list={quantityList}
                    helperText={errors ? errors.qty && 'Obligatoriskt fält' : ''}
                    register={register("qty", {required: true})}
                /> 
            </Grid>

            {/**
             *  Units
             */}

            <Grid xs={5} sm={2}>
                <SelectForm 
                    required={true}
                    label="st/m"
                    name="unit"
                    inputRef={unitRef}
                    defaultValue=""
                    list={unitList}
                    optionKey="option.value"
                    helperText={errors ? errors.unit && 'Obligatoriskt fält' : ''}
                    register={register("unit", {required: true})}
                /> 
            </Grid>


            {/**
             *   Add button
             */}

            <Grid 
                xs={2} 
                lg={2}
                display='flex' 
                // alignItems="center" 
                justifyContent="end"        
            >
                <Button 
                    variant="outlined" 
                    sx={{ width: '8rem', p: 1 }} 
                    onClick={handleObjectInput}
                >
                    Lägg till
                </Button>
                
            </Grid> 


            <Grid xs={12} sx={{ marginTop: '2rem', marginBottom: '6rem' }}>
                {/* <Typography variant="h6">Tillagt material:</Typography> */}

                {inputError &&
                    <Typography sx={{ color: "#ff0000" }}>
                        Glöm inte lägga till materialet i listan!
                    </Typography>  
                }

                {extraItems?.map((item) => (
                    <List 
                        key={item.id} 
                        sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            height: '50px', 
                            width: '100%',
                            borderBottom: '0.2px solid lightGrey',
                        }}
                    >

                        <Grid xs={6}>
                            <ListItem>{item.fittings}</ListItem>
                        </Grid>
                        <Grid xs={2}>
                            <ListItem>{item.quantity}</ListItem>
                        </Grid>
                        <Grid xs={2}>
                            <ListItem>{item.unit}</ListItem>
                        </Grid>
                        <Grid xs={2} paddingRight={0}>
                            <ListItem sx={{ justifyContent: 'end', paddingRight: 0}}>
                                <Button 
                                    variant="outlined" 
                                    sx={{ p: 1, width: '8rem', borderColor: ' #ff0000', color: '#ff0000' }} 
                                    onClick={handleDelete(item)}
                                >
                                X  Ta bort
                                </Button>
                            </ListItem>
                        </Grid>
                    </List>
                ))}
            </Grid> 
        
            {/**
             *  Estimated time
             */}

            <Grid  xs={12}>
                <Typography variant="h6" component="div">Tidsetimering</Typography>
            </Grid>


            <Grid xs={6} sm={3}>
                <TextField
                    select
                    label="Tim"
                    name="hours"
                    fullWidth
                    required
                    defaultValue=""
                    helperText={errors ? errors.hours && 'Obligatoriskt fält' : ''}

                    {...register("hours", { required: true })}
                >
                    {hours.map((option) => (
                        <MenuItem key={option.hours} value={option.hours}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>


            <Grid xs={6} sm={3}>
                <TextField
                    select
                    label="Min"
                    name="minutes"
                    fullWidth
                    required
                    defaultValue=""
                    helperText={errors ? errors.minutes && 'Obligatoriskt fält' : ''}

                    {...register("minutes", { required: true })}
                >
                    {minutes.map((option) => (
                        <MenuItem key={option.minutes} value={Number(option.minutes)}>
                            {option.value}
                        </MenuItem>
                    ))}                
                </TextField>
            </Grid>

            <br/>
       
        </Grid>
    )
}

export default CreateMaterial