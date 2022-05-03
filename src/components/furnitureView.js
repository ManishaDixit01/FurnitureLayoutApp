import React, {useState} from 'react';
import roomimage from '../images/roomimg.jpeg'
import { useDrop } from 'react-dnd'
import chair from '../images/chair.png';
import table from '../images/table.png';
import lamp from '../images/lamp.png';
import sofa from '../images/sofa.png';

export const FurnitureView = () => {
    const[furnitureList, setFurnitureList]=useState([]);
    const [{ name }, drop] = useDrop(() => ({
        accept: 'furniture',
        drop: monitor => setFurnitureList(oldList => [...oldList, monitor.name]),
        collect: monitor => ({
          name: !!monitor.name,
        }),
      }), "");
    const getItemImage = (furnitureName) => {
      switch(furnitureName){
        case 'chair':
          return chair;
        case 'table':
          return table;
        case 'lamp':
          return lamp;
        case 'sofa':
          return sofa;
      }
    };
    return (
        <div className="FurnitureView" ref={drop} style={{ backgroundImage: `url(${roomimage})`,height:'100%',width:'100%'}}>
           {[...furnitureList].map((item,index)=><img key={index} src={getItemImage(item)} alt={item}></img>)}
        </div>
    );
};