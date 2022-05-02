import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Grid } from '@material-ui/core';
import {Grid} from '@mui/material'
import FurnitureList from './furnitureList'
import FurnitureView from './furnitureView'


function FurnitureLayoutParent() {
    return (
        <div className="FurnitureLayoutParent">
            <h1>Furniture Layout Parent</h1>
            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <FurnitureList></FurnitureList>
                </Grid>
                <Grid item xs={6}>
                    <FurnitureView></FurnitureView>
                </Grid>
                <Grid item xs={3}>
                    <p>This is Furniture</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default FurnitureLayoutParent;