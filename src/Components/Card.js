import React from "react";
import "./card.css";
import Title from "./Title";
import MyContainer from "./MyContainer";
const Card = ({ title, key, children }) => {
  return (
    <div key={key} id={key} className="card">
      <MyContainer addClass="myContainer cardTitle">
        <Title text={title} />
      </MyContainer>
      {children}
    </div>
  );
};

export default Card;
