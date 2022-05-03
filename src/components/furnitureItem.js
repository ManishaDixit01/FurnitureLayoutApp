import React from 'react';
import { useDrag } from 'react-dnd';
import ListItemButton from '@mui/material/ListItemButton';

export const FurnitureItem = ({ image, alt }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'furniture',
    item: { name: alt },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
      <div>
        <div style={{border: '1px dashed black'}} ref={drag}><img src={image} alt={alt} /><p>{alt}</p></div>
        
      </div>
  );
};