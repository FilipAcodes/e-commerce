import React from "react";
import HomeImage from "../../../../images/Doggo.webp";
import "./cartIcon.css";
import { useRouter } from "next/navigation";

const HomeIcon = () => {
  const pathname = useRouter();
  const sendToHome = () => {
    pathname.push("/");
  };
  return (
    <>
      <button onClick={sendToHome}>
        <img src={HomeImage.src} className="homeIcon"></img>
      </button>
    </>
  );
};

export default HomeIcon;
