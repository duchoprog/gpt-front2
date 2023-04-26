import React, { useContext } from "react";
import StoryContext from "../context/StoryContext";
import Title from "./Title";
import "./closeModal.css";

const CloseModal = () => {
  const { setModal } = useContext(StoryContext);
  const handleClick = () => {
    setModal("");
  };
  return (
    <div className="closeModal">
      <p onClick={handleClick}>X</p>
    </div>
  );
};

export default CloseModal;
