import React, { useState } from "react";

export const SingleImage = ({ image = [{ url: "" }] }) => {
  console.log("🚀 ~ file: SingleImage.js:4 ~ SingleImage ~ image", image);
  const [DisplayImage, setDisplayImage] = useState([0])
  return (
    <>
      <div className=" d-flex align-items-center justify-content-center">
        <div>
          {image.map((currentElement, index) => {
            return (
              <>
                <figure>
                  <img
                    src={currentElement.url}
                    alt=""
                    srcset=""
                    className="w-50"
                    onClick={()=>setDisplayImage(index)}

                  />
                </figure>
              </>
            );
          })}
        </div>

        <div>
          <img src={image[DisplayImage].url} alt="" srcset="" className=" w-100  p-3" />
        </div>
      </div>
    </>
  );
};
