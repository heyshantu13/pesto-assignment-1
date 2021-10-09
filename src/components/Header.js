import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((state) => state._todoProduct);

  return (
    <div className="bg-success">
      {console.log("cart ", cart)}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12 main-section">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="dropdown"
              >
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart
                <span className="badge badge-pill badge-danger">
                  {cart.numberCart}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
