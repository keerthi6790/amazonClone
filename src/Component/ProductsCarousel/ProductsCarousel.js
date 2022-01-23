import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ProductsCarousel.css";
function ProductsCarousel(props) {
  return (
    <div className="slide-container">
      <div className="slideHeader">
        <div>{props.header}</div>
        <a>
          <span>{props.link}</span>
        </a>
      </div>
      <Slide>
        {props.images.map((slideImage, index) => {
          console.log(slideImage);
          return (
            <div className="each-slide" key={index}>
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
