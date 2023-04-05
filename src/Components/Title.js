import React from "react";
import "./title.css";

const Title = ({ text, addClass }) => {
  return (
    <div className={addClass ? addClass : "title"}>
      <h2>{text}</h2>
    </div>
  );
};

export default Title;
