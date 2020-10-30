import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import React from "react";
import "./style.css";
import eSewalogo from "../../assets/images/esewa_logo.png";
import verified from "../../assets/images/verified-by-visa.webp";
import mastercard from "../../assets/images/master-card.webp";
import iso from "../../assets/images/ISO.webp";
import google from "../../assets/images/img_google_play_badge.webp";
import apple from "../../assets/images/img_appstore_badge.webp";
import f1esewa from "../../assets/images/f1-logo-new.webp";

export default function Footer() {
  return (
    <div className="footer-root">
      <div className="privacy-policy-general row">
        <img src={eSewalogo} alt="" />
        <div className="policy-and-general">
          <div className="policy">
            <h4>POLICY</h4>
            <span>Privacy Policies</span>
            <span>Information Security Policy</span>
            <span>Terms and conditions</span>
            <span>Report Fraud/Misuse of Account</span>
            <span>Transaction Limits</span>
          </div>

          <div className="general">
            <h4> GENERAL</h4>
            <span>Getting Started</span>
            <span>Security</span>
            <span>SMS Syntax</span>
            <span>Reward Points</span>
            <span>Video Tutorials</span>
            <span>eSewa Tarrifs</span>
          </div>
        </div>

        <div className="company">
          <h4> COMPANY</h4>
          <span>About us</span>
          <span>Career</span>
          <span>Blog/News</span>
        </div>

        <div className="partners">
          <h4> PARTNERS</h4>
          <span>Banks</span>
          <span>Western Union</span>
        </div>

        <div className="help">
          <div className="help-upper">
            <h4> HELP</h4>
            <span>Developer's Guide</span>
            <span>FAQ's</span>
            <span>Contact us</span>
          </div>
          <div className="help-foot-btn">
            <h5>Become a merchant</h5>
          </div>
        </div>
      </div>

      <div className="horizontal-divider row"></div>

      <div className="footer-base-part row">
        <div className="left-footer">
          <div className="verified">
            <img src={verified} alt="" />
          </div>
          <div className="master">
            <img src={mastercard} alt="" />
          </div>
          <div className="iso">
            <img src={iso} alt="" />
          </div>

          <div className="mobile-apps">
            <h5>Download Mobile Apps</h5>
            <div className="stores">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
      
      <div className="right-footer">
        <img src={f1esewa} alt=""/>
      </div>
      </div>

      {/* Bottom-keep-in-touch-part */}
      <div className="footer-bottom py-10">
        <div className="row flex jcsb my-20">
          <p style={{ fontSize: "14px", color: "grey" }}>
            © 2009-2020 eSewa. All Rights Reserved. (Clone by: Aasish Rijal)
          </p>
          <div
            className="right flex jcsb"
            style={{ fontSize: "14px", color: "grey" }}
          >
            Keep in touch -----
            <div className="icons  mx-10 " style={{ cursor: "pointer" }}>
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
