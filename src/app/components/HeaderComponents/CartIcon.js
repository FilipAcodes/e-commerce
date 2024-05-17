"use client";
import React from "react";
import CartImage from "../../../../images/carticon.png";
import "./cartIcon.css";
import { useRouter } from "next/navigation";

const CartIcon = () => {
  const route = useRouter();
  const sendToCart = () => {
    route.push("/myCart");
  };
  return (
    <>
      <button className="iconBtn" onClick={sendToCart}>
        <img src={CartImage.src} className="Icon"></img>
      </button>
    </>
  );
};

export default CartIcon;
