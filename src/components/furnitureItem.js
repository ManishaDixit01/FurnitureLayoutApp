import React from 'react';
import { useDrag } from 'react-dnd'


function FurnitureItem({image, alt}) {

    const [{isDragging}, drag] = useDrag(() => ({
        type: 'chair',
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))

    return (
        <div className="FurnitureItem" ref={drag}>
            <img src={image} alt={alt}/>
            <p>{alt}</p>
        </div>
    );
}

export default FurnitureItem;