import React from "react";
import "./title.css";

const Title = ({ addClass, children }) => {
  return (
    <div className={addClass ? addClass : "title"}>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
