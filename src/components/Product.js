import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import { AddCart, IncreaseQuantity, DecreaseQuantity } from "../actions";

function Product() {
  const items = useSelector((state) => state._todoProduct._products);
  console.log(items);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="col-md-12">
        <div className="row p-2 bg-white border rounded mt-2">
          {items.map((item, key) => (
            <div key={item.id}>
              <div>
                {item.productName} - <b>Rs. {item.price}</b>
                <br />
                <i>Quantity : {item.quantity}</i>
              </div>
              <button
                className="btn btn-success"
                onClick={() => dispatch(AddCart(item))}
              >
                Add To Cart{" "}
              </button>
              <br />
              <button
                className="btn btn-md btn-warning"
                onClick={() => dispatch(IncreaseQuantity(key))}
              >
                +
              </button>
              <br />
              <button
                className="btn btn-md btn-danger"
                onClick={() => dispatch(DecreaseQuantity(key))}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
