import React from "react";
import Navbar from "./Navbar";

const HamburgerMenu = ({ listArray, classlist, oncloseMenu }) => {
  const IdTime = new Date().getTime().toString();

  return (
    <div className={classlist}>
      <i className="fa-sharp fa-solid fa-square-xmark" onClick={oncloseMenu}></i>
      <nav className="Mnavbar">
        <ul>
          <Navbar key={IdTime} listArray={listArray} />
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
