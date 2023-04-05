import React from "react";
import "./myContainer.css";

const MyContainer = ({ children, addClass }) => {
  return <div className={addClass ? addClass : "myContainer"}>{children}</div>;
};

export default MyContainer;
