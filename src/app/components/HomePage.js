import React from "react";
import "./homePage.css";
import LandingPicture from "../../../images/landingPicture.jpg";
import DogPaw from "../../../images/paws.png";
const HomePage = () => {
  return (
    <div className="landingPage">
      <div className="flex1Container">
        <h1 className="landingh1">Welcome to DoggoShop!</h1>
        <div className="sherlockBones">
          <img src={DogPaw.src} alt="dogPaw" className="dogPawImg"></img>
          <div>
            <h2 className="inspirational1">Anything is paw-sible.</h2>
            <h3 className="inspirational2">-Sherlock Bones</h3>
          </div>
        </div>
      </div>
      <div className="doggoLandingPicture">
        <img
          src={LandingPicture.src}
          alt="picture of dog"
          className="doggoPic"
        ></img>
      </div>
    </div>
  );
};

export default HomePage;
