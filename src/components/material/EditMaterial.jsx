import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";

// mui
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import MenuItem from '@mui/material/MenuItem'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import { Button } from "@mui/material";


const hours = [...new Array(13)].map((each, index) => ({ hours: Number(60 * index), value: index }))
const minutes = [...new Array(61)].map((each, index) => ({ minutes: Number(index), value: index }))


const EditMaterial = ({ items, register, errors, onUpdateSubmit, productRef}) => {
    return (
        <TableRow>

            {/**
             *  Product
             */}

            <TableCell sx={{ cursor: 'pointer', border: 'none' }}>

                <Grid container xs={12} mb={1}>
                    <Grid xs={3}>
                        <TextField
                            id="product"
                            size='small'
                            name="product"
                            autoComplete="product"
                            fullWidth
                            defaultValue={items.product}
                            // inputRef={register("product")}

                            helperText={errors ? errors.product && 'Obligatoriskt fält' : ''}

                            // {...register("product")}
                            {...register("product", {
                                required: true, 
                            })}
                        />
                    </Grid>

                    {/**
                     *  Category
                     */}

                    <Grid xs={3}>
                        <TextField
                            select
                            size='small'
                            label="Kategori"
                            fullWidth
                            name="category"
                            defaultValue={items.category}
                            helperText={errors ? errors.category && 'Obligatoriskt fält' : ''}

                            {...register("category")}
                            // {...register("category", { required: true }) }
                        >
                            <MenuItem value={'Apparater'}>Apparater</MenuItem>
                            <MenuItem value={'Belysning'}>Belysning</MenuItem>
                            <MenuItem value={'Data'}>Data</MenuItem>
                            <MenuItem value={'Ovrigt'}>Övrigt</MenuItem>
                        </TextField>
                    </Grid>

                    {/**
                     *  Estimated time
                     */}

                    <Grid xs={3}>
                        <TextField
                            select
                            size='small'
                            label="Tim"
                            name="hours"
                            fullWidth
                            defaultValue={items?.estimatedTime?.hours}
                            helperText={errors ? errors.hours && 'Obligatoriskt fält' : ''}

                            // {...register("estimatedTime.hours"), }
                            {...register("hours", { 
                                // required: true ,
                                setValueAs: val => parseInt(val)
                            })}
                        >
                            {hours.map((option) => (
                                <MenuItem key={option.hours} value={option.hours}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>


                    <Grid xs={2}>
                        <TextField
                            select
                            size='small'
                            label="Min"
                            name="minutes"
                            fullWidth
                            required
                            defaultValue={items.estimatedTime.minutes}
                            helperText={errors ? errors.minutes && 'Obligatoriskt fält' : ''}

                            {...register("minutes", { 
                                // required: true,
                                setValueAs: val => parseInt(val) 
                            })}
                        >
                            {minutes.map((option) => (
                                <MenuItem key={option.minutes} value={Number(option.minutes)}>
                                    {option.value}
                                </MenuItem>
                            ))}                
                        </TextField>
                    </Grid>

                    {/**
                     *  Save button
                     */}

                    {/* <Grid xs={1} display="flex" justifyContent="flex-end" alignItems="center">
                        <Button 
                            size="small"
                            variant="contained"
                            type='submit'
                            sx={{ backgroundColor: "#68C37C", width: "76px"}}
                            disableElevation
                            onClick={() => onUpdateSubmit(items)}
                        >   
                            Spara
                        </Button>
                    </Grid> */}

                </Grid>
            </TableCell>
        </TableRow>
    )
}

export default EditMaterial