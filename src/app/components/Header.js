import React from "react";
import SearchFunction from "./HeaderComponents/SearchFunction";
import CartIcon from "./HeaderComponents/CartIcon";
import HomeIcon from "./HeaderComponents/HomeIcon";

const Header = () => {
  return (
    <div>
      <HomeIcon />
      <SearchFunction />
      <CartIcon />
    </div>
  );
};

export default Header;
