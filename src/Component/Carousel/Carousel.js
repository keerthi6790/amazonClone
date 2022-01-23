import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Carousel.css";
import Slide1 from "../../image/slide1.jpg";
import Slide2 from "../../image/slide2.jpg";
import Slide3 from "../../image/slide3.jpg";
const Data = [{ img: `${Slide1}`,caption:"3" }, { img: `${Slide2}`,caption:"3" }, { img: `${Slide3}`,caption:"3" }];
const Carousel = (props) => {
  return (
    <div>
      <Slide className="slide">
        {Data.map((slideImage, index) => {
          console.log(slideImage);
          return (
              <div> 
                <img src={slideImage.img} className="slideImg"/>
              </div>
          );
        })}
      </Slide>
    </div>
  );
};
export default Carousel;
