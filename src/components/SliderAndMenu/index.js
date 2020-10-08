import React from "react";
import MyCarousalItems from "../SwipeableViews";
import slide1 from "../../assets/images/slide1.webp";

import slide2 from "../../assets/images/slide2.webp";
import slide3 from "../../assets/images/slide3.webp";
import "./style.css";

export default function SliderAndMenu({ children }) {
  return (
    <div className="row">
      <div className="slider-and-menu">
        <div className="menu-items"></div>
        <div className="slider">
        {/* <img src={slide3} className="slider-image" /> */}
          <MyCarousalItems />
        </div>
      </div>
    </div>
  );
}
