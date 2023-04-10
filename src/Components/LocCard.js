import React from "react";
import "./card.css";
import Title from "./Title";
import MyContainer from "./MyContainer";
const LocCard = ({
  addClass,
  title,
  children,
  storyParams,
  setStoryParams,
}) => {
  const handleCardClick = (e) => {
    e.target.id !== storyParams.place
      ? setStoryParams({ ...storyParams, place: e.target.id })
      : setStoryParams({ ...storyParams, place: "" });
  };
  return (
    <div
      key={title}
      id={title}
      className={addClass ? addClass : "card"}
      onClick={handleCardClick}
    >
      <MyContainer addClass="myContainer cardTitle">
        <Title text={title} />
      </MyContainer>
      {children}
    </div>
  );
};

export default LocCard;
