import React from "react";
import Button from "../header/Button";
import { NavLink } from "react-router-dom";

const AddToCart = ({ itemPrice, itemSelected, itemName, realPrice, onIclick, onDclick, changeclass, onClosed }) => {
  return (
    <div className={changeclass}>
      <div className="inner_contant">
        <din className="row1">
          <NavLink to="/store">Back to Gift Page</NavLink>
          <i class="fa-solid fa-xmark" onClick={onClosed}></i>
        </din>
        <table className="addeditems">
          <tr>
            <th>Name</th>
            <th>MRP</th>
            <th>Total Price</th>
            <th>Total items</th>
          </tr>
          <tr>
            <td>{itemName}</td>
            <td>{realPrice}</td>
            <td>{itemPrice}</td>
            <td className="itemBtn"><button onClick={onDclick}>-</button>{itemSelected}<button onClick={onIclick}>+</button></td>
          </tr>
        </table>
        <div className="checkout">
          <Button styleclass="btn" text="CHECK OUT" />
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
