import React from "react";
import HomeImage from "../../../../images/order.png";
import "./cartIcon.css";
import { useRouter } from "next/navigation";

const HomeIcon = () => {
  const pathname = useRouter();
  const senToOrder = () => {
    pathname.push("/order");
  };
  return (
    <>
      <button onClick={senToOrder} className="iconBtn">
        <img src={HomeImage.src} className="Icon"></img>
      </button>
    </>
  );
};

export default HomeIcon;
