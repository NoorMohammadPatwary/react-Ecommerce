import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
    return (
        <>
            <div className="container ">
                <div className="d-flex flex-wrap align-items-center justify-content-around ">


                    <div className=" btn mt-1  col-md-6 col-12 text-center border  border-primary btn-outline-info ">
                        <TbTruckDelivery className=' text-primary fa-3x' />
                        <h6>Super Fast and Free Delivery </h6>

                    </div>
                    <div className=" btn mt-1  col-md-6 col-12 text-center border  border-primary btn-outline-info">
                    <MdSecurity className=' text-primary fa-3x  ' />
                        <h6>Non-contact shipping</h6>  </div>

                    <div className=" btn mt-1  col-md-6 col-12 text-center border  border-primary btn-outline-info">
                    <GiReceiveMoney className=' text-primary fa-3x ' />
                        <h6>Money-back guraranted</h6>  </div>
                    
                    <div className=" btn mt-1  col-md-6 col-12 text-center border  border-primary btn-outline-info">
                        <RiSecurePaymentLine className=' text-primary fa-3x' />
                        <h6>Super Secure Payment System</h6>  </div>
                </div>
            </div>

            <br /><br />
        </>
    )
}

export default Services