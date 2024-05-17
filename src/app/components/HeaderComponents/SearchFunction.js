import React from "react";

const SearchFunction = () => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter your query"
      />
    </>
  );
};

export default SearchFunction;
