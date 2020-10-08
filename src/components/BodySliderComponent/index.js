import React from "react";
import ItemCard from "../Cards";
import RowItem from "../RowItem";
import item1 from "../../assets/images/itm1.jpg";
import item2 from "../../assets/images/itm2.png";
import item3 from "../../assets/images/itm3.png";
import item4 from "../../assets/images/itm4.jpg";
import item5 from "../../assets/images/itm5.jpg";

import notfoundImage from "../../assets/images/logo_img.png";

export default function BodySliderComponent() {
  return (
    <div>
      <React.Fragment>
        <RowItem header="Popular Services">
          <ItemCard cardImage={item1} desc="Rs 22 maa TV Puraskar" />
          <ItemCard
            cardImage={item2}
            desc="Council for Technical Education and Vocational Training"
          /> 
          <ItemCard cardImage={item3} desc="Nepal Medical Council" offer={true} offerText="10% cashback"/>
          <ItemCard cardImage={item4} desc="Nepal Nursing Council Token" />
          <ItemCard cardImage={item5} desc="esumegh.com" />
        </RowItem>
      </React.Fragment>

      <React.Fragment>
        <RowItem header="Insurance">
          <ItemCard cardImage={notfoundImage} desc="Nepal Life Insurance Co." offer={true} offerText="Wholesale Rate"/>
          <ItemCard
            cardImage={notfoundImage}
            desc="National Life Insurance Co." offer={true} offerText="2% cashback"
          />
          <ItemCard cardImage={notfoundImage} desc="Prime Life Insurance Co." />
          <ItemCard cardImage={notfoundImage} desc="Surya Life Insurance Co." />
          <ItemCard cardImage={notfoundImage} desc="Prabhu Life Insurance Co." />
        </RowItem>
      </React.Fragment>
      <React.Fragment>
        <RowItem header="Essential Deliveries">
          <ItemCard cardImage={notfoundImage} desc="Rasan" offer={true} offerText="Upto 30% discount"/>
          <ItemCard
            cardImage={notfoundImage}
            desc="Jeevee Health Pvt. Ltd." 
          />
          <ItemCard cardImage={notfoundImage} desc="SastoDeal" />
          <ItemCard cardImage={notfoundImage} desc="Organic Online" offer={true} offerText="10% cashback"/>
          <ItemCard cardImage={notfoundImage} desc="Daraz" />
        </RowItem>
      </React.Fragment>

      <React.Fragment>
        <RowItem header="Health">
          <ItemCard cardImage={notfoundImage} desc="Nepal Mediciti" />
          <ItemCard
            cardImage={notfoundImage}
            desc="Mark International Kidney Centre"
          />
          <ItemCard cardImage={notfoundImage} desc="Nepal Medical Council" />
          <ItemCard cardImage={notfoundImage} desc="Imark Pvt. Ltd." />
          <ItemCard cardImage={notfoundImage} desc="Hams Hospital Direct Pay" />
        </RowItem>
      </React.Fragment>
   </div> 
  );
}
