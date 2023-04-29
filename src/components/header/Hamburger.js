import React from "react";

const Hamburger = ({ className, onclick }) => {
  return (
    <div className={className}>
      <i className="fa-solid fa-bars" onClick={onclick}></i>
    </div>
  );
};

export default Hamburger;
