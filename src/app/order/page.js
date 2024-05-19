"use client";
import React from "react";
import "./orderPage.css";
import { useState } from "react";

const page = () => {
  const [findOrder, setFindOrder] = useState("");
  const [orderResults, setOrderResults] = useState(4);
  const setOrder = (e) => {
    setFindOrder(e.target.value);
  };
  const goFindOrder = () => {
    console.log(`${findOrder}`);
    setFindOrder("");
  };
  return (
    <div className="orderPageContainer">
      <h1 className="orderH1">View your order #</h1>
      <form className="searchForm">
        <label htmlFor="orderInput">Enter order to view it:</label>
        <input
          type="text"
          onChange={setOrder}
          value={findOrder}
          id="orderInput"
        />
        <button type="submit" onClick={goFindOrder}>
          Search
        </button>
      </form>
      {orderResults && (
        <div className="orderDetails">
          Fetch some data from your database matching the order #
        </div>
      )}
    </div>
  );
};

export default page;
