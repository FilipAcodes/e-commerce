"use client";
import "./search.css";
import Image from "../../../../images/magnifying.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchFunction = () => {
  const [userInput, setUserInput] = useState("");
  const query = useRouter();

  const searchUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const submitBtn = () => {
    query.push(`/query/${userInput}`);
    setUserInput("");
  };

  const enterKeyQuery = (e) => {
    if (e.key === "Enter") {
      submitBtn();
    }
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
        onKeyDown={enterKeyQuery}
      />
      <button className="searchBtn" type="submit" onClick={submitBtn}>
        <img src={Image.src} className="magnifyingIcon"></img>
      </button>
    </div>
  );
};

export default SearchFunction;
