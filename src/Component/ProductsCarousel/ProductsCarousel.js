import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Electronics } from "../Products/Electronical";
import "./ProductsCarousel.css";
function ProductsCarousel() {
  return (
    <div className="slide-container">
      <Slide>
        {Electronics.map((slideImage, index) => {
          console.log(slideImage);
          return (
            <div className="each-slide" key={index}>
              <div className="slideHeader">
                <div>Up to 60% off | Refurbished products</div>
                <a>
                  <span>See more</span>
                </a>
              </div>

              <div className="innerSlide">
                <img src={slideImage.img1} />
                <img src={slideImage.img2} />
                <img src={slideImage.img3} />
                <img src={slideImage.img4} />
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
export default ProductsCarousel;
