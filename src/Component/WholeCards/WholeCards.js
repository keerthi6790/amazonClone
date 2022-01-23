import React from "react";
import Cards from "../Cards/Cards";
import "./WholeCards.css";
import {
  Details,
  Details1,
  Details2,
  Details3,
  Details4,
  Details5,
  Details6,
} from "../Products/Products";
import { Electronics } from '../Products/Electronical'
import { Mask } from "../Products/Mask";
import CardSignin from "../cardSignin/cardSignin";
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import Signin from "../Signin/Signin";
import Foot from "../Footer/foot1";

function WholeCards() {
  return (
    <div>
      <div className="grid">
        <div>
          <Cards
            header="Now save bill details & get timely reminders"
            details={Details}
            linkText="See more"
          />
        </div>
        <div>
          <Cards
            header="Try your luck today, win a scratch card daily"
            details={Details1}
            linkText="See your collected offers"
          />
        </div>
        <div>
          <Cards
            header="Pay your credit card bills on Amazon"
            details={Details2}
            linkText="See more"
          />
        </div>
        <div>
          <CardSignin />
        </div>
      </div>
      <div style={{position:"relative",bottom:'12rem'}}>
        <ProductsCarousel images={Electronics} header="Up to 60% off | Refurbished products" link="see more"/>
      </div>
      <div className="grid">
        <div>
          <Cards
            header="Multi-tasking made easy and safe"
            details={Details3}
            Link="See more"
          />
        </div>
        <div>
          <Cards
            header="Up to 45% off | Top offers from Amazon..."
            details={Details4}
            Link="Shop Now"
          />
        </div>

        <div>
          <Cards
            header="Best Sellers in Beauty"
            details={Details5}
            Link="Shop Now"
          />
        </div>
        <div>
          <Cards
            header="For the Perfect Birthday celebration"
            details={Details6}
            Link="More..."
          />
        </div>
      </div>
      <div style={{position:"relative",bottom:'12rem'}}>
        <ProductsCarousel images={Mask} header="Curated protective supply products | Amazon Launchpad" link="see all safety essentials"/>
        <Signin/>
      </div>
      <div style={{position:"relative",bottom:"10rem"}}>
        <Foot/>
      </div>
    </div>
  );
}
export default WholeCards;
