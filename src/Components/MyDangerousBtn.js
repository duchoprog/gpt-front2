import React, { useContext } from "react";
import "./myBtn.css";
import { useNavigate } from "react-router-dom";
import StoryContext from "../context/StoryContext";
import Modal from "./Modal";

const MyDangerousBtn = ({
  addClass,
  btn1,
  btn2,
  text,
  text2,
  handleDanger,
  btn1dest,
  btn2dest,
  children,
}) => {
  const { modal, setWarning } = useContext(StoryContext);

  const navigate = useNavigate();

  return (
    <div
      className={addClass ? addClass : "myBtn"}
      onClick={handleDanger}
      btn1={btn1}
      btn2={btn2}
      text={text}
      text2={text2}
      btn1dest={btn1dest}
      btn2dest={btn2dest}
    >
      {children}
    </div>
  );
};

export default MyDangerousBtn;
