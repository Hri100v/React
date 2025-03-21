import React, { useState } from "react";
import "./Like.css";

export const Like = () => {
  const [count, setCount] = useState(0);
  const increment = (prev) => {
    console.log("Like.jsx");
    setCount((prev) => (prev += 1));
  };

  return (
    <>
      <div role="like-button" className="product-like">
        <label>{count}</label>
        <br />
        <i className="fa-regular fa-heart" onClick={increment}></i>
      </div>
    </>
  );
};
