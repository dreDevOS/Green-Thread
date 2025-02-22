import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";


import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Drehendz stands at the intersection of sustainability, fashion-forward tropical designs, and natural comfort. Its emphasis on plant-based materials sets it apart from both eco-friendly competitors and tropical brands that lack sustainability.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            <BsFillTelephoneFill /> +1 876 830 5637
            <br></br>
            <FaMapLocationDot /> Courts Plaza Shop 19, Baptist Road, JMDMR17 Mandeville, JM
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo" font="tropical-orange" >DREHENDZ</span>
          <span className="copyright">
            © Copyright 2025. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
