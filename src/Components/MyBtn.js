import React from "react";
import "./myBtn.css";
import { useNavigate } from "react-router-dom";

const MyBtn = ({ props }) => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate(props.dest);
  };
  return (
    <div className={props.addClass ? props.addClass : "myBtn"} onClick={goTo}>
      {props.children}
    </div>
  );
};

export default MyBtn;
