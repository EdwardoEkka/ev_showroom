import React from "react";
import "./styles/type.css";

const Type = ({ ClickTA, ClickT1, ClickT2, ClickT3 }) => {
  return (
    <div>
      <div className="type-Box">
        <p onClick={() => ClickTA()}>All Models</p>
        <p onClick={() => ClickT1()}>Type1</p>
        <p onClick={() => ClickT2()}>Type2</p>
        <p onClick={() => ClickT3()}>Type3</p>
      </div>
    </div>
  );
};

export default Type;
