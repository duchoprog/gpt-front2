import React, { useContext } from "react";
import "./card.css";
import Title from "./Title";
import MyContainer from "./MyContainer";
import StoryContext from "../context/StoryContext";
const LocCard = ({ title, children }) => {
  const { setStoryParams, storyParams } = useContext(StoryContext);
  const handleCardClick = (e) => {
    //
    e.target.id !== storyParams.place
      ? setStoryParams({ ...storyParams, place: e.target.id })
      : setStoryParams({ ...storyParams, place: "" });
  };
  return (
    <div
      key={title}
      id={title}
      className={title === storyParams.place ? "card loc sel" : "card loc"}
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
