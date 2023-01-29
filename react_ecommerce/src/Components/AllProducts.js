import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import { FilterSection } from "./FilterSection";
import Product from "./Product";

import { Sort } from "./Sort";

export const AllProducts = () => {
  const { FilterProducts } = useFilterContext();

  return (
    <>
      <section className=" row ">
        <div className=" col-md-3">
          <FilterSection />
        </div>
        <div className=" col-md-9 ">
          <div className=" text-success row">
            <Sort />
          </div>

          <div className=" text-danger ">
            <div className="">
              
              {FilterProducts.map((currentElement, index) => (
                <Product {...currentElement} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
