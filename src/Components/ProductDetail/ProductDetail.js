import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProdById, addToCart } from "../../Redux/appSlice";
import "./ProductDetail.css";

function ProductDetail() {
  const { prodId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProdById(state.app, prodId));

  return (
    <div className="container_product">
      <div className="product">
        <img src={product.imgURL} className="product_image" />
        <div className="product_details">
          <h1>{product.title}</h1>
          <h4>M.R.P {product.mrp}</h4>
          <h5>Benefits</h5>
          <ul>
            <li>Gives A classical look</li>
            <li>Straps are very Strong and it guarantees long term Usage</li>
            <li>1 year warranty</li>
          </ul>
          <button
            className="addToCart_button"
            onClick={(e) => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
