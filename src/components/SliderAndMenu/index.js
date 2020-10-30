import React from "react";
import MenuCard from "../MenuCard";
import MyCarousalItems from "../SwipeableViews";
import "./style.css";

export default function SliderAndMenu({ children }) {
  return (
    <div className="row">
      <div className="slider-and-menu">
        <div className="menu-items">
          <MenuCard title="Topup & Recharge"/>
          <MenuCard title="Electricity & Water"/>
          <MenuCard title="TV Payment"/>
          <MenuCard title="Bus Ticket/Tours & Travel"/>
          <MenuCard title="School & College"/>
          <MenuCard title="Insurance/Finance/EMI"/>
          <MenuCard title="Movies & Entertainment"/>
          
        </div>
        <div className="slider">
        {/* <img src={slide3} className="slider-image" /> */}
          <MyCarousalItems />
        </div>
      </div>
    </div>
  );
}
