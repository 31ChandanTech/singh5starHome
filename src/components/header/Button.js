import React from 'react';
import "./Header.css";

const Button = ({onClicked,styleclass,text}) => {
  return (
    <button onClick={onClicked} className={styleclass}>{text}</button>
  )
}

export default Button;