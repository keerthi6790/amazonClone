import React from "react";
import "./Cards.css";

function Cards(props) {
  function classRender(){
    if(props.details.length>1){
      return "cardsGrid"
    }
    else{
      return "cardsFlex"
    }
  }
  return (
    <div className="cardHeader">
      <div className="Heading1">{props.header}</div>
      <div id="cards" className={classRender()}>
        {props.details.map((d) => {
          return (
            <div key={d.caption} >
              <img
                src={d.img}
                style={{ width: "100%", maxWidth: "400px", height: "auto" }}
              />
              <div className="caption">{d.caption}</div>
            </div>
          );
        })}
      </div>
      <div className="seeMore">{props.linkText}</div>
    </div>
  );
}
export default Cards;
