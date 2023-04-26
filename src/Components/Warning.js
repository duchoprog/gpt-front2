import React, { useContext } from "react";
import StoryContext from "../context/StoryContext";
import Title from "./Title";
import MyContainer from "./MyContainer";
import MyBtn from "./MyBtn";
import "./warning.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import CloseModal from "./CloseModal";

const Warning = () => {
  const { warning, setModal, setWarning } = useContext(StoryContext);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  const handleClick = (e) => {
    setModal("");
    setWarning({});
    navigate(e.target.getAttribute("dest"));
    console.log(e.target.getAttribute("dest"));
  };

  return (
    <div className="warning">
      <CloseModal></CloseModal>
      <Title>Warning!</Title>
      <h2>{warning.text}</h2>
      {!isAuthenticated && <h3>{warning.text2}</h3>}

      <MyContainer className="buttons">
        <MyBtn dest={warning.btn1dest} handleClick={handleClick}>
          {warning.btn1}
        </MyBtn>
        <MyBtn dest={warning.btn2dest} handleClick={handleClick}>
          {warning.btn2}
        </MyBtn>
      </MyContainer>
    </div>
  );
};

export default Warning;
