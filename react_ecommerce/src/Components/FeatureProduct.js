/* eslint-disable no-unused-vars */
import React from "react";
import { useProductContext } from "../Context/AppContext";
import Product from "./Product";


function FeatureProduct() {
  const { IsLoading, featureProduct, products, IsError } = useProductContext();
  console.log("🚀 ~ file: FeatureProduct.js:6 ~ FeatureProduct ~ IsLoading", IsLoading)
  console.log("🚀 ~ file: FeatureProduct.js:6 ~ FeatureProduct ~ featureProduct", featureProduct)

  if (IsLoading) {
    return (
      <>
        <h1> Loading......... </h1>{" "}
      </>
    );
  }
  return <>
  <div className="col-sm-12 d-flex flex-wrap align-items-center justify-content-around mt-5">
  { 
        featureProduct.map((currentElement,index)=> <Product {...currentElement} key={index} />)
  }
  </div>
  
  </>;
}

export default FeatureProduct;
