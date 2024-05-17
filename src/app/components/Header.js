import React from "react";
import SearchFunction from "./HeaderComponents/SearchFunction";
import CartIcon from "./HeaderComponents/CartIcon";
import HomeIcon from "./HeaderComponents/HomeIcon";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <HomeIcon />
      <SearchFunction />
      <CartIcon />
    </div>
  );
};

export default Header;
