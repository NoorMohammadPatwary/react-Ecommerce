import React from 'react'
import { FcCompactCamera } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcPicture } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";

function Trusted() {
  return (
    <>
    <div className=" container d-flex align-content-center justify-content-evenly flex-wrap">
        <div className="text-center">   
             <h6 >Zeina </h6><FcCompactCamera className=' fa-5x ' />
         </div>
         

        <div className="text-center">   
             <h6 >Zeina </h6><FcBusinessman className=' fa-5x ' />
         </div>
         

        <div className="text-center">   
             <h6 >Zeina </h6><FcPicture className=' fa-5x ' />
         </div>
         

        <div className="text-center">   
             <h6 >Zeina </h6><FcGlobe className=' fa-5x ' />
         </div>
         

    </div>
    </>
  )
}

export default Trusted