import React from "react";
import CartImage from "../../../../images/carticon.png";
import "./cartIcon.css";

const CartIcon = () => {
  return (
    <>
      <button>
        <img src={CartImage.src} className="cartIcon"></img>
      </button>
    </>
  );
};

export default CartIcon;
