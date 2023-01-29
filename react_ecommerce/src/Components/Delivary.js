import React from 'react'
import { GrDeliver } from "react-icons/gr";
import { TbReplace } from 'react-icons/tb';
import { FaShippingFast } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

export const Delivary = () => {
  return (
    <div className=' d-flex align-items-center justify-content-between text-center'>
        <div className="">
            <i><GrDeliver/></i>
            <p>Free Delivary </p>
        </div>
        <div className="">
            <i><TbReplace/></i>
            <p>30 days  replacement</p>
        </div>
        <div className="">
            <i><FaShippingFast/></i>
            <p> Spatial Dalivary </p>
        </div>
        <div className="">
            <i><MdOutlineSecurity/></i>
            <p> 2 years warrenty </p>
        </div>
    </div>
  )
}
