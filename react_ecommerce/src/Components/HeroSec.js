import React from "react";
import { useNavigate } from "react-router-dom";


function HeroSec({ StoreName }) {
    const navigate=useNavigate()
    const ShopNowF =() =>{
       
        navigate("/Products")

        
    }
  return (
    <>
      <div className=" container-fluid">
        <div className=" d-flex align-items-center justify-content-between  flex-wrap row">
          <div className="  col-sm-12 col-md-6 border ">
            <p> Read More </p>
            <h1> {StoreName} </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              quod voluptas nihil velit harum odio delectus molestiae odit est
              qui, exercitationem rerum vitae commodi nam illo et quo fugiat
              impedit?
            </p>
          </div>

          <div className="col-sm-12 col-md-6 ">
            <figure className=" p-5">
              {" "}
              <img
                src="https://img.freepik.com/free-photo/full-length-portrait-happy-family_171337-2281.jpg"
                alt=""
                className=" img-fluid  "
              />
            </figure>
          </div>
        </div>
        <button className=" btn btn-outline-success" onClick={ShopNowF} > ShopNow </button>
      </div>

    </>
  );
}

export default HeroSec;
