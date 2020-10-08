import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer-root">

        <p className="p-10 " style={{color:"white"}}>Comming Soon...</p>
      <div className="footer-bottom py-10">
        <div className="row flex jcsb my-20">
          <p style={{fontSize:"14px",color:"grey"}}>© 2009-2020 eSewa. All Rights Reserved. (Clone by: Aasish Rijal)</p>
          <div className="right flex jcsb" style={{fontSize:"14px",color:"grey"}}>Keep in touch -----
          <div className="icons  mx-10 " style={{ cursor:"pointer"}}>
          <Facebook/>
          <Twitter/>
          <Instagram/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
