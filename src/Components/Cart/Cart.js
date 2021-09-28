import React, { useState, useEffect } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.app.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.quantity * item.mrp;
    });
    setTotal(sum);
  }, [cart]);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      <div className="cart_container">
        <div className="cart_items">
          {cart.map((cartItem, index) => {
            console.log("Total", total);
            return (
              <div className="cart_item">
                <img className="cart_image" src={cartItem.imgURL} />
                <div className="item_details">
                  <h4>{cartItem.title}</h4>
                  <h6>MRP: {cartItem.mrp}</h6>
                  <div className="buttons">
                    <p className="quantity_button">-</p>
                    <p>{cartItem.quantity}</p>
                    <p className="quantity_button">+</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart_total">
          <h4>Total Amount: {total}</h4>
          <button className="checkout_button">Checkout</button>
          <button className="checkout_button">Pay with Paypal</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
