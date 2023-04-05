import React from "react";
import "./myBtn.css";
import { useNavigate } from "react-router-dom";

const MyBtn = ({ text, addClass, dest }) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(dest);
  };
  return (
    <div className={addClass ? addClass : "myBtn"} onClick={goTo}>
      {text}
    </div>
  );
};

export default MyBtn;
