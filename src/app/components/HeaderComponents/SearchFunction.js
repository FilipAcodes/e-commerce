import React from "react";
import "./search.css";
const SearchFunction = () => {
  return (
    <div className="searchInput">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter your query"
        className="searchInput"
      />
    </div>
  );
};

export default SearchFunction;
