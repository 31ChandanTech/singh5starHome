import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Navbar = ({ listArray, className }) => {
  return (
    <>
      {
        listArray.map((elem, ind) => {
          return (
            <li className={className} key={ind + 1000}><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to={elem.url}>{elem.text}</NavLink></li>
          )
        })
      }
    </>
  )
}

export default Navbar;