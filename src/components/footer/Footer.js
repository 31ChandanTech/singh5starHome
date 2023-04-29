import React from "react";
import Button from "../header/Button";
import "./Footer.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="row1">
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/location/singh-restaurant">HOURS & LOCATION</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/contact">CONTACT</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/dress-code">DRESS CODE</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/jobs">JOBS</NavLink></li>
          <li><a rel="noreferrer" href="https://www.toasttab.com/sona-36-e-20th-st/giftcards" target="_blank">GIFT CARDS</a></li>
          <li><a rel="noreferrer" href="https://www.google.com/maps/place/Singh+Hotel/@22.529291,88.347806,11z/data=!4m6!3m5!1s0x3a02777105e7a1e1:0x8cd9681ebfc9c7ce!8m2!3d22.5292914!4d88.3478055!16s%2Fg%2F11h_br6q0f?hl=en" target="_blank">17 B, Ramesh Mitra Rd, 700025</a></li>
        </ul>
        <Button styleclass="btn btnfooter" text="EMAIL SIGNUP" />
      </div>
      <div className="row2">
        <a rel="noreferrer" href="https://www.instagram.com/sonanewyork/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
      </div>
      <div className="row3">
        <a rel="noreferrer" href="https://www.getbento.com/?utm_source=footer&utm_campaign=sona-nyc.com" target="_blank">powered by TAJ BENGAL</a>
      </div>
    </footer>
  );
};

export default Footer;
