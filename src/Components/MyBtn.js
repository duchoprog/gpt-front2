import React from "react";
import "./myBtn.css";
import { useNavigate } from "react-router-dom";

const MyBtn = ({ addClass, handleClick, children, dest }) => {
  //const navigate = useNavigate();
  return (
    <div
      className={addClass ? addClass : "myBtn"}
      onClick={handleClick}
      dest={dest}
    >
      {children}
    </div>
  );
};

export default MyBtn;
