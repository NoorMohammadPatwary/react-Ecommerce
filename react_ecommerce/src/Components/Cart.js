/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function Cart({ product }) {
  const { id, colors, stock } = product;
  const [number, setnumber] = useState(1);
  const setIncrease = () => {
    number< stock ? setnumber(number + 1) : setnumber(stock);
  };
  const setDecrease = () => {
    number > 1 ? setnumber(number - 1) : setnumber(1);
  };
  return (
    <>
      
      <div className=" d-flex mt-3 ">
      {/* ➕➖ */}
        <button className=" btn-sm btn-outline-dark" onClick={setIncrease}>➕</button>
        <h6 className=" m-2">{number}</h6>
        <button className=" btn-sm btn-outline-dark " onClick={setDecrease}>➖</button>
      </div>
      <button className=" btn btn-outline-danger p-2 mt-1"> Add To cart </button>
    </>
  );
}

export default Cart;
