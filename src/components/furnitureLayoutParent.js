import React from 'react';
import { Grid } from '@mui/material'
import { FurnitureList } from './furnitureList'
import { FurnitureView } from './furnitureView'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export const FurnitureLayoutParent = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="FurnitureLayoutParent">
                <h1>Furniture Layout Parent</h1>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <FurnitureList></FurnitureList>
                    </Grid>
                    <Grid item xs={8}>
                        <FurnitureView></FurnitureView>
                    </Grid>
                </Grid>
            </div>
        </DndProvider>
    );
};