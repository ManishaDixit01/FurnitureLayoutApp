import React from 'react';
import List from '@mui/material/List';
import { FurnitureItem } from './furnitureItem';
import chair from '../images/chair_small.png';
import table from '../images/table_small.png';
import lamp from '../images/lamp_small.png';
import sofa from '../images/sofa_small.png';
import { Divider } from '@mui/material';

export const FurnitureList = () => {
    return (
        <div className="FurnitureList">
            <List component="nav" aria-label="main mailbox folders">
                <FurnitureItem image={chair} alt="chair" />
                <Divider/>
                <FurnitureItem image={lamp} alt="lamp" />
                <Divider/>
                <FurnitureItem image={table} alt="table" />
                <Divider/>
                <FurnitureItem image={sofa} alt="sofa" />
                <Divider/>
            </List>
        </div>
    );
}

export default FurnitureList;