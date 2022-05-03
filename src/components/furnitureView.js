import React, {useState} from 'react';
import roomimage from '../images/roomimg.jpeg'
import { useDrop } from 'react-dnd'
import chair from '../images/chair_small.png'



function FurnitureView() {

    

    const[count,setCount]=useState(0)

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'chair',
        drop: () => setCount(count+1),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      }), "")

    
    
    return (
        <div className="FurnitureView" ref={drop} style={{ backgroundImage: `url(${roomimage})`,height:'100%',width:'100%'}}>
           {[...Array(count)].map((item,index)=><img key={index} src={chair} alt="chair"></img>)}
        </div>
    );
}



export default FurnitureView;