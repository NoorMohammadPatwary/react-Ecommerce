/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/AppContext";
import Cart from "./Cart";
import { Colors } from "./Colors";
import { Delivary } from "./Delivary";
import FormatPrice from "./FormatPrice";
import { PageNavigation } from "./PageNavigation";
import { SingleImage } from "./SingleImage";
import StarsAndRevews from "./StarsAndRevews";

const Api = "https://api.pujakaitem.com/api/products";
function Products() {
  const { getSingleProduct } = useProductContext();
  const { IsSingleProduct } = useProductContext();
  const {
    id: alise,
    name,
    image,
    colors,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
  } = IsSingleProduct;
  console.log(
    "🚀 ~ file: Products.js:9 ~ Products ~ IsSingleProduct",
    IsSingleProduct
  );
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${Api}?id=${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageNavigation title={name} />
      <div className=" container d-flex align-content-center justify-content-between row">
        <div className=" col-md-6 col-sm-12 ">
          <SingleImage image={image} />
        </div>
        <div className="  col-md-6 col-sm-12">
          <StarsAndRevews stars={stars} reviews={reviews} />
          <h1>
            {" "}
            {name} / {company}
          </h1>
          <p>{description}</p>
          
          <Delivary/>
          <h6>
            {" "}
            Available : {stock > 0 ? `Instock  ${stock}` : "Out of Stock"}
          </h6>


          <FormatPrice price={price} />
          <hr />
          {/* <Colors colors={colors} Productdata={IsSingleProduct}/> */}
          {stock>0? <Cart product={IsSingleProduct}/> : null}
        </div>
      </div>
    </>
  );
}

export default Products;
