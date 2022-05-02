import React from 'react';
import { useDrag } from 'react-dnd'


function FurnitureItem(props) {

    return (
        <div className="FurnitureItem">
            <img src={props.image} alt={props.alt}/>
            <p>{props.alt}</p>
        </div>
    );
}

export default FurnitureItem;