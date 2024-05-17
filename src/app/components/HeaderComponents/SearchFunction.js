"use client";
import "./search.css";
import Image from "../../../../images/magnifying.png";
import { useState } from "react";
const SearchFunction = () => {
  const [userInput, setUserInput] = useState("");
  const searchUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const submitBtn = () => {
    console.log("Submitted");
    setUserInput("");
  };
  return (
    <div className="searchContainer">
      <input
        type="text"
        id="search"
        name="search"
        value={userInput}
        placeholder="Enter your query"
        className="searchInput"
        onChange={searchUserInput}
      />
      <button className="searchBtn" type="submit" onClick={submitBtn}>
        <img src={Image.src} className="magnifyingIcon"></img>
      </button>
    </div>
  );
};

export default SearchFunction;
