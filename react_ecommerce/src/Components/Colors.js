import React, { useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs';

import { MdOutlineColorLens } from 'react-icons/md';

export const Colors = ({colors}) => {
    console.log(colors);
    

    const [Color, setColor] = useState(colors[0])
    

  return (
    <>
    Colors :  
    {
        colors.map((currentElement,index)=>{
            return (
                <>
                <button
              className={
                Color === currentElement
                  ? " ProductColorStyle btn  "
                  : "ProductColorStyle btn"
              }
              key={index}
              style={{ backgroundColor: currentElement }}
              onClick={()=> setColor(currentElement)}
            >
              {}
              {Color === currentElement ? <BsCheckCircle className=" text-success " /> : <MdOutlineColorLens className=" text-white"/>}
              
            </button>
                 </>
            )
        })
    }
    
    </>
  )
}
