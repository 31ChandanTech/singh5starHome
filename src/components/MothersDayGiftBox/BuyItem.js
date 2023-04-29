import React, { useState } from "react";
import "./Buyitem.css";
import Button from "../header/Button";
import Contant from "./itemcontant.json";
import AddToCart from "./AddToCart";
import { NavLink, useNavigate } from "react-router-dom";

const BuyItem = () => {

  let ParentImg = `${Contant.realProductImg}`;
  const Mrp = `${Contant.price}`

  const [mainImg, setMainImg] = useState(ParentImg);
  const [cardItem, setCardItem] = useState(0);
  const [price, setPrice] = useState(0);
  const [toggle, setToggle] = useState("removeaddtocart");

  const GetImg = (e) => {
    ParentImg = e._targetInst.memoizedProps.src;
    setMainImg(ParentImg);
  };

  const inc = ()=>{
    setCardItem(cardItem+1)
    setPrice((cardItem+1)*Mrp)
  }
  const dec = ()=>{
    if(cardItem > 0){
        setCardItem(cardItem-1)
        setPrice((cardItem-1)*Mrp)
    }else{
        setCardItem(0)
        setPrice(0)
    }
  }
  const onclick = ()=>{
    setToggle("addtocart")
  }

  const navigte = useNavigate();
  const onclosed = ()=>{
    setToggle("removeaddtocart")
    navigte('/store/product/mothers-day-gift-box');
  }

  return (
    <div className="buyitem">
      <div className="backtostore">
        <NavLink to="/store">Back to Store</NavLink>
      </div>
      <div className="itemContant" data-aos="fade-up">
        <div className="left">
          <div className="row1">
            <img src={mainImg} alt="Img" />
          </div>
          <div className="row2">
            {Contant.ProductImages.map((Element, index) => {
              return (
                <img
                  key={index + 110}
                  onMouseEnter={GetImg}
                  src={Element}
                  alt={`Img${index + 1}`}
                />
              );
            })}
          </div>
        </div>
        <div className="right">
          <h2>{Contant.title}</h2>
          <p className="price">`&#x20b9; {Contant.price}</p>
          <p>{Contant.description}</p>
          <ul className="parent">
            <li className="parentli">
              Each Gift Box includes:
              <ul className="child">
                {
                    Contant.includes.map((e,i)=>{
                        return <li className="childli" key={120+i}>{e}</li>
                    })
                }
              </ul>
            </li>
          </ul>
          <p>{Contant.description1}</p>
          <p>{Contant.description2}</p>
          <p>{Contant.description3}</p>
          <p>{Contant.description4}</p>
          <Button onClicked={onclick} styleclass="btn btn2" text="ADD TO CART" />
        </div>
      </div>
      <AddToCart onClosed={onclosed} changeclass = {toggle} onIclick={inc} onDclick={dec} itemPrice ={price} itemSelected = {cardItem} itemName = {Contant.title} realPrice = {Contant.price}/>
    </div>
  );
};

export default BuyItem;
