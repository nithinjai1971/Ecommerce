import React, { useState } from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchedProducts } from "../../Redux/appSlice";
import { useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.app.cart);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    dispatch(setSearchedProducts(searchTerm));
  };

  return (
    <div className="Header">
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/amazon-1869030-1583154.png"
        className="Title-icon"
      ></img>
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={(e) => handleSearch()}>Search</button>
      </div>
      <ul className="Header_navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cart.length}</Link>
        </li>
      </ul>
    </div>
  );
}
export default Header;
