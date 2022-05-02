import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import FurnitureItem from './furnitureItem'
import chair from '../images/chair_small.png'
import table from '../images/table_small.png'
import lamp from '../images/lamp_small.png'
import sofa from '../images/sofa_small.png'
import { Divider } from '@mui/material';
function FurnitureList() {
    return (
        <div className="FurnitureList">
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton>
                    <FurnitureItem image={chair} alt="Chair"/>
                </ListItemButton>
                <Divider></Divider>
                <ListItemButton>
                    <FurnitureItem image={lamp} alt="Lamp" />
                </ListItemButton>
                <Divider></Divider>
                <ListItemButton>
                    <FurnitureItem image={table} alt="table"/>
                </ListItemButton>
                <Divider></Divider>
                <ListItemButton>
                    <FurnitureItem image={sofa} alt="Sofa" />
                </ListItemButton>
                <Divider></Divider>
            </List>   
        </div>
    );
}

export default FurnitureList;