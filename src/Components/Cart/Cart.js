import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.app.cart);
  return (
    <div className="container">
      {cart.map((cartItem, index) => (
        <div className="product_container" key={index}>
          <h4>{cartItem.title}</h4>
          <img className="Image_two" src={cartItem.imgURL}></img>
          <h4 className="Mrp_details">M.R.P{cartItem.mrp}</h4>
          <ul>
            <li>Gives A classical look</li>
            <li>Straps are very Strong and it guarantees long term Usage</li>
            <li>1 year warranty</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cart;
