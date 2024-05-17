import React from "react";
import GetToKnowUs from "./FooterComponents/GetToKnowUs";
import LetUsHelpYou from "./FooterComponents/LetUsHelpYou";
import DoggoPayment from "./FooterComponents/DoggoPayment";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <GetToKnowUs />
      <LetUsHelpYou />
      <DoggoPayment />
    </div>
  );
};

export default Footer;
