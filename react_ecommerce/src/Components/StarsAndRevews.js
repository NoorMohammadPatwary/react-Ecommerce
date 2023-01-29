import React from "react";
import { ImStarHalf } from "react-icons/im";
import { RiStarLine, RiStarSFill } from "react-icons/ri";

function StarsAndRevews({ stars, reviews }) {
  let ratingStars = Array.from({ length: 5 }, (v, index) => {
    let Numbers = index + 0.5;
    return (
      <span key={index} className ={" text-warning"}>
        {
       stars >= index + 1 ? ( <RiStarSFill/>) : stars >= Numbers ? ( <ImStarHalf/>)  : (<RiStarLine/>)
        }
      </span>
    );
  });

  return (
    <>
      <h3 className="">{ratingStars} of {reviews} People </h3>
      
      
    </>
  );
}

export default StarsAndRevews;

