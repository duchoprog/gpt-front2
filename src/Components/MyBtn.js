import React from "react";
import "./myBtn.css";
import { useNavigate } from "react-router-dom";

const MyBtn = ({ addClass, dest, children }) => {
  const navigate = useNavigate();
  return (
    <div
      className={addClass ? addClass : "myBtn"}
      onClick={() => {
        navigate(dest);
      }}
    >
      {children}
    </div>
  );
};

export default MyBtn;
