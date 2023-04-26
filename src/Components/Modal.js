import React, { useContext } from "react";
import "./modal.css";
import { Spinner } from "./Spinner";
import StoryContext from "../context/StoryContext";
import Warning from "./Warning";

const Modal = ({ children }) => {
  const { loading, warning } = useContext(StoryContext);
  return (
    <div className="modal">
      {loading && <Spinner />}
      {warning.text && <Warning></Warning>}
    </div>
  );
};

export default Modal;
