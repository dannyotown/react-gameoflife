import React from "react";
import "./css/Counter.css";

const Counter = ({ count }) => {
  return (
    <div className="absoluteCounter">
      <div className="counter">Gen: {count.current}</div>
    </div>
  );
};

export default Counter;
